import Ember from 'ember';

export default Ember.Controller.extend({
	validateResult: true,
	staffId:"",
	password:"",
	errorMessage:"",
	applicationController: Ember.inject.controller('application'),
	homeController: Ember.inject.controller('home'),
	actions:{
		validate: function(){
			if(this.get('staffId').toString() === "" || this.get('password').toString() === ""){
				this.set('validateResult',false);
				this.set('errorMessage', "Please input staff id and password!");
			}
			else{
				Ember.$.ajax('requests/userValidation', { 
					data: { 
						staffId: this.get('staffId'), 
						password: this.get('password') 
					}, 
					context: this}).then(function(response){
						if(response.result.result){
							this.set('validateResult',true);
							document.cookie="sessionId=" + response.result.sessionId.toString();

							// this.get('homeController').set('userType', parseInt(response.result.userType));
							// if(this.get('homeController').get('userType') === 0){
							// 	this.get('homeController').set('isAdmin', true)
							// }
							// this.get('applicationController').set('userName', response.result.staffName.toString());

							// this.transitionToRoute('home');
							window.location = 'home/userInfo';
						}
						else{
							this.set('validateResult',false);
							this.set('errorMessage', "Staff ID or Password is not right!");
							
						}
					});
			}
		}
	}
});
