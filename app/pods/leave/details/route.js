import Ember from 'ember';

export default Ember.Route.extend({	

	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){

		var data = {
				cmd: 'leaveDetail',
				leaveId: params.leaveId

		};
		var controller = this.controllerFor('leave.details');
		var appController = this.controllerFor('application');

		this.get('ajaxGeneric').post(data, appController).then(function(response){
			
			if(response.leave.isCoreLeave){
				response.leave.isCoreLeave = "Yes";
			}
			else{
				response.leave.isCoreLeave = "No";
			}

			controller.set('model', response);

			if(response.leave.comments || response.leave.approveComments || response.leave.cancelComments || response.leave.rejectComments){
				controller.set('isComments', true);
			}
			else{
				controller.set('isComments', false);
			}

			var data_ui = {
				cmd: 'refresh',
			};
			controller.get('ajaxGeneric').post(data_ui, appController).then(function(response){
				controller.set('currentUser', response.username);

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
				if(currentUser === requestor && (status === "approved" || status === "rejected")){
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


					
					
