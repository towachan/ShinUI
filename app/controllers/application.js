import Ember from 'ember';

export default Ember.Controller.extend({

	isLogin: function(){
		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			return true;
		}
		return false;
	}.property('currentPath'),

	actions: {
		jumpToLogin: function(){
			this.transitionToRoute('/login');
		}
	}
});