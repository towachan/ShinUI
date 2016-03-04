import Ember from 'ember';

export default Ember.Controller.extend({
	detailsController: Ember.inject.controller('leave.details'),
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	appController: Ember.inject.controller('application'),
	listArray: Ember.inject.service('list-array'),
	multiArr: [],
	isAction: "disabled",
	sortBy: "leaveId",
	sortOrder: 1,
	leaves:[],
	init: function(){
		$("#1").addClass('active');
		console.log('init');
	},
	actions: {
		pageChg: function(pageNo){
			// var domPageID = "#page-" + pageNo;
			pageNo = Number(pageNo) -1;
			// if(!$(domPageID).hasClass("active")){
				console.log("jump to " + pageNo);
				var leavesPaged = this.get('leavesPaged');
				this.set('model', leavesPaged[pageNo]);

				// var currentPage =this.get('currentPage');
				// var pages = this.get('pages');

				// pages[currentPage].licls = "disabled";
				// currentPage = pageNo;
				// pages[currentPage].licls = "active";

				// this.set('currentPage', pageNo);
				// this.set('pages', pages);

			// }

		},

		sort: function(){
			var sortBy = this.get('sortBy');
			var sortOrder = this.get('sortOrder');
			var leaves = this.get('leaves');
			var leavesPaged = this.get('leavesPaged');
			var currentPage = this.get('currentPage');
			var type = "string";
			// if(sortBy === "startDate" || sortBy === "endDate" || sortBy === "createTime"){
			// 	type = "number";
			// }
			console.log(leaves);
			console.log(leavesPaged);
			leaves = this.get('listArray').sort(leaves, sortBy, sortOrder, type);
			leavesPaged = this.get('listArray').splitArr(leaves.slice(0), 2);

			this.set('model', leavesPaged[currentPage]);
		},


		leaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		},

		sortByChg: function(){
			var sortBy = $('#sortBy').val();
			this.set('sortBy', sortBy);

		},

		sortOrderChg: function(){
			var sortOrder = $('#sortOrder').val();
			this.set('sortOrder', sortOrder);
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
			this.set('multiArr', multiArr);
			if(multiArr.length === 0){
				this.set('isAction', "disabled");
			}
			else{
				this.set('isAction', false);
			}

		},

		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			// Ember.$('#confirmModal').modal();
			Ember.$('#confirmModal').appendTo('body').modal('show');
		},

		confirm: function(params){
			// var leaveId = this.get('model').leave.leaveId;
			var leaves = this.get('multiArr');
			var reqType = params.reqType;
			var comments = params.comments;


			var _this = this;
			var appController = this.get('appController');

			var data = {
					cmd: reqType + 'Leave',
					leaves: leaves,
					comments: comments
					
				};

			this.get('ajaxGeneric').post(data, appController).then(function(response){
				appController.get('modalShow').show(appController, 
											"System Message",
											"success",
											 "Operation success!",
											  true, "#alertModal");
			});

		}
	}

});
