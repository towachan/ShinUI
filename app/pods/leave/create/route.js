import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		Ember.$.ajax({
			url: 'requests/',
			data: {
				cmd: 'leaveEntitle'
			},
			context: this,
			success: function(response){
				if(response.responseStatus === "success"){
					var controller = this.controller;
					controller.set('model', response.data);
				}
				else{
					//show error msg
					var appController = this.controllerFor('application');
					appController.set('modalHeader', response.errorCode);
					appController.set('modalMsg', response.errMessage);
					appController.set('modalReload', false);
					Ember.$('#alertModal').modal();
				}
			}
		});

		Ember.$.ajax({
			url: 'requests/',
			data: {
				cmd: 'userInfo'
			},
			context: this,
			success: function(response){
				if(response.responseStatus === "success"){
					var controller = this.controller;
					controller.set('currentUser', response.data.user);
				}
				else{
					//show error msg
					var appController = this.controllerFor('application');
					appController.set('modalHeader', response.errorCode);
					appController.set('modalMsg', response.errMessage);
					appController.set('modalReload', false);
					Ember.$('#alertModal').modal();
				}
			}
		});
		

	}
});
