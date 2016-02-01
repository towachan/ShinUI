import Ember from 'ember';

export default Ember.Controller.extend({
	validateResult: true,
	staffId:"",
	password:"",
	errorMessage:"",
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
						console.log(response);
						if(response.result.result){
							this.set('validateResult',true);
							this.transitionToRoute('home');
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
