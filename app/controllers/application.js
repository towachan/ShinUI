	import Ember from 'ember';

export default Ember.Controller.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),
	isLogin: function(){
		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			return true;
		}
		else if(this.get('ajaxGeneric').cookieCheck()){
			var data = {
					cmd: 'userInfo'
			};
			var _this = this;
			this.get('ajaxGeneric').post(data, this, this).then(function(response){
				_this.set('currentUser', response.data.user);
			});
			return false;
		}
		else{
			this.get('modalShow').show(this, "Error", "Session unvalid! Please log in.", true, "#alertModal", "/login");
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