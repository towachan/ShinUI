import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		logout: function(){
			Ember.$.ajax('requests/logOut').then(function(response){
				document.cookie= document.cookie + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
				window.location.href = 'login';
			});
		}
	}

});