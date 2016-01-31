import Ember from 'ember';

export default Ember.Controller.extend({
	validateResult: true,
	staffId:"",
	password:"",
	errorMessage:"",
	actions:{
		validate: function(){
			if(this.get('staffId') == "" || this.get('password') == ""){
				this.set('validateResult',false);
				this.set('errorMessage', "Please input staff id and password!");
			}
			else{
				this.set('validateResult',false);
				this.set('errorMessage', "Staff ID or Password is not right!");
			}
		}
	}
});
