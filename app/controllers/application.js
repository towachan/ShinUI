import Ember from 'ember';

export default Ember.Controller.extend({


	isLogin: function(){
		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			return true;
		}
		else{
			Ember.$.ajax({
				url: 'requests/',
				context: this,
				data: {
					cmd: 'userInfo'
				},
				success: function(response){
					if(response.responseStatus === "success"){
						this.set('currentUser', response.data.user);
					}
					else{
						this.transitionToRoute('/login');
					}
				}
			});
		}
		return false;
	}.property('currentPath'),

	actions: {
		jumpToLogin: function(){
			this.transitionToRoute('/login');
		}
	}
});