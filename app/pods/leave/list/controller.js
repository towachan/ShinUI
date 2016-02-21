import Ember from 'ember';

export default Ember.Controller.extend({


	actions: {
		onLeaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		}
	}

});
