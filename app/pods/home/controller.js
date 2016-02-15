import Ember from 'ember';

export default Ember.Controller.extend({
	classNames: {
		userInfoClass: "",
		leaveListClass: "",
	},

	applicationController: Ember.inject.controller('application'),
	initialize: function(){
		var classNames = this.get('classNames');
		for(var c in classNames){
			classNames[c] = classNames[c].toString().replace("active", "");
		}
		this.set('classNames', classNames);
	}.on('init'),

	actions: {
		logout: function(){
			Ember.$.ajax('requests/logOut').then(function(response){
				document.cookie= document.cookie + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
				window.location.href = 'login';
			});
		}
	}
});