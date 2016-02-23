import Ember from 'ember';

export default Ember.Controller.extend({

	detailsController: Ember.inject.controller('leave.details'),
	actions: {
		leaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		}
	}

});
