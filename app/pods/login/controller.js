import Ember from 'ember';

export default Ember.Controller.extend({
	validateResult: true,
	staffId:"",
	password:"",
	errorMessage:"",
	loginSystem: "leave",	

	actions: {
		switchSystem: function(){
			var loginSystem = Ember.$("#loginSystem").val();
			this.set('loginSystem', loginSystem);
		}
	}

});
