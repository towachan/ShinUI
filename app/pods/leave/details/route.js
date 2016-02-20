import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(params){
		Ember.$.ajax({
			url: 'requests/leaves/' + params.leaveId,
			context: this,
			success: function(response){
				console.log(response.data);
				if(response.result){
					var controller = this.controller;
					controller.set('model', response.data);
				}
			}
		});
	}
});
