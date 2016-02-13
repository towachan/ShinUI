import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		Ember.$.ajax({
			url: 'requests/userInfo',
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
