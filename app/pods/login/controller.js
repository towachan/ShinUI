import Ember from 'ember';

export default Ember.Controller.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),
	username:"",
	password:"",
	errorMessage:"",
	loginSystem: "leave",	
	init: function(){
		var imageUrl = "../img/bk-2.jpg";
		Ember.$('body').css('background-image', 'url(' + imageUrl + ')');

	},

	actions: {
		switchSystem: function(){
			var loginSystem = Ember.$("#loginSystem").val();
			this.set('loginSystem', loginSystem);

			if(loginSystem === "leave"){
				var imageUrl = "../img/bk-2.jpg";
			}
			else{
				var imageUrl = "../img/bk.jpg";
			}
			Ember.$('body').css('background-image', 'url(' + imageUrl + ')');

		},
		validate: function(){
			var controller = this.controllerFor('login');
			var appController = this.controllerFor('application');

			if(this.controllerFor("login").get('username').toString() === "" || this.controllerFor("login").get('password').toString() === ""){
				appController.get('modalShow').show(appController, "Log In Fail","error", "Please input staff id and password!", false, "#alertModal");
		
			}
			else{
				var data =  {
					cmd: 'login',
					username: this.controllerFor("login").get('username'), 
					password: this.controllerFor("login").get('password'),
					loginSystem: this.controllerFor("login").get('loginSystem') 
				};

				this.get('ajaxGeneric').post(data, appController).then(
					function(response){
						// controller.set('validateResult', true);
						controller.transitionToRoute('/sysInfo');
					}
				);

			}
		}
	}

});
