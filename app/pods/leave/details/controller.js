import Ember from 'ember';

export default Ember.Controller.extend({
	initialize: function(){
		// this.get('homeController').set('classNames.leaveListClass', 'active');

	}.on('init'),
	appController: Ember.inject.controller('application'),
	approver: null,
	requester: null,
	status: null,

	currentUserAction: function(){
		var currentUser = this.get('appController').get('session').staffId;
		var approver = this.get('approver');
		var requester = this.get('requester');
		var status = this.get('status');

		var isApprove = false;
		var isSubmit = false;
		var isCancel = false;

		if(currentUser === approver && status === "pending"){
			isApprove = true;
		}
		if(currentUser === requester && status === "pending"){
			isCancel = true;
		}
		if(currentUser === requester && status === "draft"){
			isSubmit = true;
		}

		return{
			isApprove: isApprove,
			isSubmit: isSubmit,
			isCancel: isCancel
		}
		
	}.property('appController', 'approver', 'requester', 'status'),

	actions: {
		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			Ember.$('#confirmModal').modal();
		},
		back: function(){
			history.go(-1);
		}
	}

});
