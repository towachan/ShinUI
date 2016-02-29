import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	actions:{
		validate: function(){
			if(this.controllerFor("login").get('staffId').toString() === "" || this.controllerFor("login").get('password').toString() === ""){
				this.controllerFor("login").set('validateResult',false);
				this.controllerFor("login").set('errorMessage', "Please input staff id and password!");
			}
			else{

				var controller = this.controllerFor('login');
				var appController = this.controllerFor('application');

				var data =  {
					cmd: 'login',
					staffId: this.controllerFor("login").get('staffId'), 
					password: this.controllerFor("login").get('password'),
					loginSystem: this.controllerFor("login").get('loginSystem') 
				};

				this.get('ajaxGeneric').post(data, appController).then(
					function(response){
						controller.set('validateResult', true);
						controller.transitionToRoute('/sysInfo');
					}
				);

			}
		}
	}
});
