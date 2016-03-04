	import Ember from 'ember';

export default Ember.Controller.extend({
	isLeave: null,
	isTravel:null,
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),
	loginController: Ember.inject.controller('login'),

	isLogin: function(){

		if(this.get('currentPath').toString().indexOf("login") > -1 || this.get('currentPath').toString().indexOf("quickApprove") > -1){
			return true;
		}
		else {
			var data = {
					cmd: 'refresh'
			};
			var _this = this;
			this.get('ajaxGeneric').post(data, this).then(function(response){
				_this.set('currentUserName', response.staffName);

				if(_this.get('currentSys')){
					$('body').removeClass(_this.get('currentSys'));
				}
				_this.set('currentSys', response.system);
				$('body').addClass(_this.get('currentSys'));

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
	}.property('currentPath'),

	actions: {
		jumpToLogin: function(){
			var data = {
				cmd: 'logout'
			};
			this.get('ajaxGeneric').post(data,this).then(function(response){

			});
			this.get('modalShow').show(this, "Log Out", "info", "You have been logged out.", true, "#alertModal", "/login");

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
					location.reload();
				}
				else{
					_this.transitionToRoute('sysInfo');
				}
			})
		},

		naviRoute: function(route){
			this.transitionToRoute(route);
		}
	}
});