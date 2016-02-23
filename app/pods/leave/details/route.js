import Ember from 'ember';

export default Ember.Route.extend({	


	model: function(params){

		Ember.$.ajax({
			url: 'requests/',
			data:{
				cmd: 'leaveDetail',
				data: {
					leaveId: params.leaveId
				}
			},
			context: this,
			success: function(response){
				if(response.responseStatus === 'success'){
					var controller = this.controller;
					controller.set('model', response.data);
					Ember.$.ajax({
						url: 'requests/',
						context: controller,
						data:{
							cmd: 'userInfo',
						},
						success: function(response){
							if(response.responseStatus === "success"){
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
							}
							else{	
								var appController = this.controllerFor('application');
								appController.set('modalHeader', response.errorCode);
								appController.set('modalMsg', response.errMessage);
								appController.set('modalReload', false);
								Ember.$('#alertModal').modal();

							}

						} 
					});

				}
				else{
					var appController = this.controllerFor('application');
					appController.set('modalHeader', response.errorCode);
					appController.set('modalMsg', response.errMessage);
					appController.set('modalReload', false);
					Ember.$('#alertModal').modal();
				}
			}
		});
	},
});


					
					
