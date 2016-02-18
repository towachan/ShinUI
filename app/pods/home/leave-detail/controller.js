import Ember from 'ember';

export default Ember.Controller.extend({
	homeController: Ember.inject.controller('home'),
	initialize: function(){
		// this.get('homeController').set('classNames.leaveListClass', 'active');
	}.on('init'),

	isStatusChanged: function(){
		var status = this.get('model').status;
		if(status === "pending"){
			return false;
		}
		return "disabled";
	}.property('model'),


	actions: {
		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			Ember.$('#confirmModal').modal();
		}
	}

});
