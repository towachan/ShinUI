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
					url: 'requests/login',
					context: this,
					data:{
						staffId: this.controllerFor("login").get('staffId'), 
						password: this.controllerFor("login").get('password') 
					},
					success: function(response){
						var controller = this.controller;
						if(response.result){
							controller.set('validateResult',true);
							document.cookie = document.cookie + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
							console.log(document.cookie);
							document.cookie="sessionId=" + response.data.sessionId.toString();
							console.log(document.cookie);
							// console.log(document.cookie);
							window.location = '/sysInfo';
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
