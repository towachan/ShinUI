import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		Ember.$.ajax({
			url: 'requests/listLeaves/' + params,
			context: this,
			success: function(response){
				if(response.result){
					var controller = this.controller;
					controller.set('model', response.data);
				}
			}
		});
	}
});
 