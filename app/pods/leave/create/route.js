import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		if(document.cookie.toString().indexOf("sessionId") > -1){
			Ember.$.ajax({
				url: 'requests/getEntitle',
				context: this,
				success: function(response){
					var controller = this.controller;
					if(response.result){
						controller.set('model', response.data);
					}
					else{
						// window.location.href = '/#/sysInfo';
						this.transitionTo('/sysInfo');
					}
				}
			});
		}
		else{
			this.transitionTo('/sysInfo');
			// window.location.href = '/#/sysInfo';
		}
	}
});
