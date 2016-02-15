import Ember from 'ember';

export default Ember.Controller.extend({	
	homeController: Ember.inject.controller('home'),
	initialize: function(){
		this.get('homeController').set('classNames.leaveListClass', 'active dropdown');
	}.on('init'),

	actions: {
		leaveDetail: function(leaveId){
			window.location.href = '/home/leaveDetail/' + leaveId;
			// this.transitionToRoute('/home/leaveDetail/'+leaveId);	
			// this.get('detailController').set('leaveId',leaveId);
		}

	}
});
