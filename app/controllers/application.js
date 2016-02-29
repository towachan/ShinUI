	import Ember from 'ember';

export default Ember.Controller.extend({
	isLeave: null,
	isTravel:null,
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),

	isLogin: function(){
		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			return true;
		}
		else if(this.get('ajaxGeneric').cookieCheck()){
			var data = {
					cmd: 'refresh'
			};
			var _this = this;
			this.get('ajaxGeneric').post(data, this).then(function(response){
				_this.set('currentUserName', response.staffName);
				_this.set('currentSys', response.system);
				var currentSys = _this.get('currentSys');
				if(currentSys === "leave"){
					_this.set('isLeave', true);
					_this.set('isTravel', false);
				}
				if(currentSys === "travel"){
					_this.set('isTravel', true);
					_this.set('isLeave', false);
				}
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
		},

		switchSystem: function(){
			var systemName = this.get('currentSys');
			var _this = this;
			var data = {
				cmd: 'switchSystem'
			}
			this.get('ajaxGeneric').post(data, this).then(function(response){
				console.log("System Switch");
				if(_this.get('currentPath') === "sysInfo"){
					// _this.transitionToRoute('sysInfo', response);
					// location.reload();
				}
				else{
					_this.transitionToRoute('sysInfo');
				}
			})
		}
	}
});