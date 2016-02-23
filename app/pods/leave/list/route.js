import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		Ember.$.ajax({
			url: 'requests/',
			context: this,
			data: {
				cmd: params.listStatus
			},
			success: function(response){
				if(response.responseStatus === "success"){
					var controller = this.controller;
					controller.set('model', response.data);
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
});
 