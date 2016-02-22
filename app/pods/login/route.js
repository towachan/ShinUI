import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		validate: function(){
			if(this.controllerFor("login").get('staffId').toString() === "" || this.controllerFor("login").get('password').toString() === ""){
				this.controllerFor("login").set('validateResult',false);
				this.controllerFor("login").set('errorMessage', "Please input staff id and password!");
			}
			else{
				Ember.$.ajax({
					url: 'requests/',
					context: this,
					data:{
						cmd: 'login',
						data: {
							staffId: this.controllerFor("login").get('staffId'), 
							password: this.controllerFor("login").get('password') 
							
						}
					},
					success: function(response){
						var controller = this.controller;
						if(response.responseStatus === "success"){
							controller.set('validateResult',true);
							this.transitionTo('/sysInfo');
						}
						else{
							controller.set('validateResult',false);
							controller.set('errorMessage', "Staff ID or Password is not right!");
						}
					},
					error:function(){
						console.log('error');
					}
				});

			}
		}
	}
});
