import Ember from 'ember';

export default Ember.Component.extend({
	classNames: {
		userInfoClass: "",
		leaveListClass: "",
		approveReqClass:""
	},
	initialize: function(){
		var classNames = this.get('classNames');
		for(var c in classNames){
			classNames[c] = classNames[c].toString().replace("active", "");
			// classNames[c] = "";
		}
		this.set('classNames', classNames);
		if(document.cookie.toString().indexOf("sessionId") > -1){
			Ember.$.ajax({
				url: 'requests/getSession',
				context: this,
				success: function(response){
					if(response.result){
						this.set('session', response.data);
					}
					else{
						window.location.href = '/login';
					}
				}
			});
		}
		else{
			window.location.href = '/login';
		}
	}.on('init'),

	actions: {
		logout: function(){
			Ember.$.ajax('requests/logOut').then(function(response){
				document.cookie = document.cookie + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
				window.location.href = '/login';
			});
		}
	}
});
