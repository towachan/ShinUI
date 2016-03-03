import Ember from 'ember';

export default Ember.Controller.extend({
	initialize: function(){
		// this.get('homeController').set('classNames.leaveListClass', 'active');

	}.on('init'),
	isCreateComments: false,
	isCancelComments: false,
	isApproveComments: false,
	isRejectComments: false,
	appController: Ember.inject.controller('application'),
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),
	actions: {
		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			// Ember.$('#confirmModal').modal();
			Ember.$('#confirmModal').appendTo("body").modal('show');
		},

		confirm: function(params){
			var leaveId = this.get('model').leave.leaveId;
			var leaves = [];
			leaves.push(leaveId);
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
