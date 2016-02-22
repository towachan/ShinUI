import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		Ember.$.ajax({
			url: 'requests/',
			context: this,
			data: {
				cmd: params
			},
			success: function(response){
				if(response.responseStatus === "success"){
					var controller = this.controller;
					controller.set('model', response.data);
				}
				else{
					//show error message
				}
			}
		});
	}
});
 