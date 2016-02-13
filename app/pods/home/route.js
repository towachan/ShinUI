import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		if(document.cookie.toString().indexOf("sessionId") > -1){
			Ember.$.ajax({
				url: 'requests/home',
				context: this,
				success: function(response){
					var controller = this.controller;
					if(response.result){
						this.controllerFor('application').set('userName', response.data.userName.toString());
						controller.set('model', response.data);
					}
					else{
						window.location.href = 'login';
					}
				}
			});
		}
		else{
			window.location.href = 'login';
		}
	}
});
