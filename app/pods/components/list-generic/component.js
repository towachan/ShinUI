import Ember from 'ember';

export default Ember.Component.extend({
	multiArr:[],
	init: function(){
		this._super();

		this.set('sortBy', this.get('sortByArr')[0].val);
		this.set('orderBy', this.get('orderByArr')[0].val);
		this.set('pageUnit', this.get('pageUnitArr')[0].val);

	},
	pageFirst: function(){
		if(this.get('pages')){
			var pageUnit = this.get('currentPageUnit');
			var currentPage = Number(this.get('currentPage'));
			return pageUnit * currentPage + 1;
		}
		return "--";
	}.property('currentPage', 'currentPageUnit'),	

	pageLast: function(){
		if(this.get('pages')){
			var pageUnit = this.get('currentPageUnit');
			var currentPage = Number(this.get('currentPage')) + 1;
			if(pageUnit*currentPage > this.get('recordCount')){
				return this.get('recordCount');
			}
			return pageUnit * currentPage;
		}
		return "--";
	}.property('currentPage', 'currentPageUnit','recordCount'),

	actions: {


		pagePre: function() {
			if(Number(this.get('currentPage')) > 0){
				this.send('pageChg', this.get('currentPage'));
			}
		},

		pageNext: function() {
			if(Number(this.get('currentPage')) + 1 < Number(this.get('pages').length)){
				this.send('pageChg', Number(this.get('currentPage')) +2 );
			}
		},
		pageChg: function(pageNo){
			var domPageID = "#page-" + pageNo;
			pageNo = Number(pageNo) -1;
			if(!$(domPageID).hasClass("active")){

				var currentPage =this.get('currentPage');
				var page = this.get('pages')[currentPage];

				Ember.set(page, 'licls', "disabled");
				Ember.set(page, 'acls', "list-page");

				page = this.get('pages')[pageNo];

				Ember.set(page, 'licls', "active");
				Ember.set(page, 'acls', "");

				this.sendAction('pageChg',pageNo);

			}
		},

		sortByChg: function(){
			var sortBy = $('#sortBy').val();
			this.set('sortBy', sortBy);
		},
		orderByChg: function(){
			var orderBy = $('#orderBy').val();
			this.set('orderBy', orderBy);

		},
		pageUnitChg: function(){
			var pageUnit = Number(Ember.$('#pageUnit').val());
			this.set('pageUnit', pageUnit);

		},

		sortList: function(){
			var sortBy = this.get('sortBy');
			var orderBy = this.get('orderBy');
			var pageUnit = this.get('pageUnit');

			this.sendAction('sortList', {sortBy:sortBy, orderBy:orderBy, pageUnit:pageUnit});
		},


		leaveDetail:  function(leaveId){
			this.sendAction('leaveDetail', leaveId);
		},

		multi: function(leaveId){
			var multiArr = this.get('multiArr');
			var domLeaveId = "#" + leaveId;
			if($(domLeaveId).hasClass("info")){
				$(domLeaveId).removeClass("info");
				multiArr = $.grep(multiArr, function(value) {
  					return value != leaveId;
				});
			}
			else {
				$(domLeaveId).addClass("info");
				multiArr.push(leaveId);
			}
			this.set('multiArr', multiArr)
			this.sendAction('multi', multiArr);

		}

	}
});
