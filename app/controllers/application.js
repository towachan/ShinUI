	import Ember from 'ember';

export default Ember.Controller.extend({
	isLeave: null,
	isTravel:null,
	isLoading: false,
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	modalShow: Ember.inject.service('modal-show'),
	loginController: Ember.inject.controller('login'),
	init: function(){
		var opts = {
		  lines: 13 // The number of lines to draw
		, length: 28 // The length of each line
		, width: 14 // The line thickness
		, radius: 42 // The radius of the inner circle
		, scale: 1 // Scales overall size of the spinner
		, corners: 1 // Corner roundness (0..1)
		, color: '#FFF' // #rgb or #rrggbb or array of colors
		, opacity: 0.25 // Opacity of the lines
		, rotate: 0 // The rotation offset
		, direction: 1 // 1: clockwise, -1: counterclockwise
		, speed: 1 // Rounds per second
		, trail: 60 // Afterglow percentage
		, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
		, zIndex: 2e9 // The z-index (defaults to 2000000000)
		, className: 'spinner' // The CSS class to assign to the spinner
		, top: '50%' // Top position relative to parent
		, left: '50%' // Left position relative to parent
		, shadow: false // Whether to render a shadow
		, hwaccel: false // Whether to use hardware acceleration
		, position: 'absolute' // Element positioning
		}
		var spinner = new Spinner(opts);
		this.set('spinner', spinner);
		$('[data-toggle="tooltip"]').tooltip();
	},
	ww: window.innerWidth,
	width: function(){
		console.log(this.get('ww'));
	}.property('ww'),

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

		loading: function(transition, route){
			console.log("loading");
			this.router.one('didTransition', function(){
				console.log("ready");
			});
			 return true;
		},

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