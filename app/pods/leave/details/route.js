import Ember from 'ember';

export default Ember.Route.extend({	

	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){

		var data = {
				cmd: 'leaveDetail',
				data: {
					leaveId: params.leaveId
				}
		};
		var controller = this.controllerFor('leave.details');
		var appController = this.controllerFor('application');

		this.get('ajaxGeneric').post(data, appController).then(function(response){
			controller.set('model', response.data);

			var data_ui = {
				cmd: 'userInfo',
			};
			controller.get('ajaxGeneric').post(data_ui, appController).then(function(response){
				controller.set('currentUser', response.data.user.staffId);

				var currentUser = controller.get('currentUser');
				var approver = controller.get('model').leave.approverId;
				var requestor = controller.get('model').leave.requestorId;
				var status = controller.get('model').leave.status;


				var isApprove = false;
				var isSubmit = false;
				var isCancel = false;

				if(currentUser === approver && status === "pending"){
					isApprove = true;
				}
				if(currentUser === requestor && status === "pending"){
					isCancel = true;
				}
				if(currentUser === requestor && status === "draft"){
					isSubmit = true;
				}

				controller.set('isApprove', isApprove);
				controller.set('isCancel', isCancel);
				controller.set('isSubmit', isSubmit);
			});
		});

	},
});


					
					
