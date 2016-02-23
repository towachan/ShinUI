	import Ember from 'ember';

export default Ember.Controller.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	isLogin: function(){
		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			// var data = {
			// 	cmd: 'userInfo'
			// };
			// var controller = this;
			// this.get('ajaxGeneric').post(data, controller).then(function(data){
			// 	console.log(controller);
			// });

			return true;
		}
		else if(document.cookie.toString().indexOf("sessionId") > -1){
			var data = {
					cmd: 'userInfo'
			};
			var controller = this;
			this.get('ajaxGeneric').post(data, controller).then(function(response){
				controller.set('currentUser', response.data.user);
			});



			// Ember.$.ajax({
			// 	url: 'requests/',
			// 	context: this,
			// 	data: {
			// 		cmd: 'userInfo'
			// 	},
			// 	success: function(response){
			// 		if(response.responseStatus === "success"){
			// 			this.set('currentUser', response.data.user);
			// 		}
			// 		else{
			// 			this.set('modalHeader', "Error");
			// 			this.set('modalMsg', response.errMessage);
			// 			this.set('modalReload', true);
			// 			Ember.$('#alertModal').modal();
			// 			this.transitionToRoute('/login');	
			// 		}
			// 	}
			// });
			return false;
		}
		else{
			this.set('modalHeader', "Error");
			this.set('modalMsg', "Session unvalid! Please log in.");
			this.set('modalReload', true);
			Ember.$('#alertModal').modal();
			this.transitionToRoute('/login');
			return false;
		}
	}.property('currentPath'),

	actions: {
		jumpToLogin: function(){
			this.set('modalHeader', "Log Out");
			this.set('modalMsg', "You have been logged out.");
			this.set('modalReload', true);
			Ember.$('#alertModal').modal();
			this.transitionToRoute('/login');
		}
	}
});