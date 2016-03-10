import Ember from 'ember';

export default Ember.Controller.extend({
	detailsController: Ember.inject.controller('leave.details'),
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	appController: Ember.inject.controller('application'),
	listArray: Ember.inject.service('list-array'),
	multiArr: [],
	isAction: "disabled",
	leaves:[],
	leavesPaged:[],

	sortByArr:[
		{val: "leaveId", name: "Leave ID"},
		{val: "requestorName", name: "Requestor"},
		{val: "status", name: "Status"},
		{val: "startDate", name: "Start Date"},
		{val: "endDate", name: "End Date"},
		{val: "leaveType", name: "Leave Type"},
		{val: "createTime", name: "Create Time"}
	],

	orderByArr: [
		{val: 1, name: "Ascending"},
		{val: 0, name: "Descending"}
	],

	pageUnitArr: [
		{val:2, name:"2"},
		{val:3, name:"3"},
		{val:4, name:"4"},
		{val:10, name:"10"}
	],


	actions: {

		pageChg: function(pageNo){
			var leavesPaged = this.get('leavesPaged');
			this.set('model', leavesPaged[pageNo]);

			this.set('currentPage', pageNo);
		},

		sortList: function(params){
			var leaves = this.get('leaves');
			this.set('currentPage', 0);
			var currentPage = this.get('currentPage');
			
			var sortBy = params.sortBy;
			var orderBy = Number(params.orderBy);
			var pageUnit = Number(params.pageUnit);

			var type = "string";

			leaves = this.get('listArray').sort(leaves, sortBy, orderBy, type);
			var leavesPaged = this.get('listArray').splitArr(leaves.slice(0), pageUnit);

			this.set('leaves', leaves);
			this.set('leavesPaged', leavesPaged);
			this.set('model', leavesPaged[currentPage]);
			this.set('pageUnit', pageUnit);

			var pages = [];
			for(var i=0; i<leavesPaged.length; i++){
				var number = i+1;
				var page = {no: number, id: "page-" + number, licls:"disabled", acls: "list-page" };
				pages.push(page);
			}

			pages[0].licls = "active";
			pages[0].acls = " ";

			this.set('pages', pages);

		},


		leaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		},


		multi: function(multiArr){
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
