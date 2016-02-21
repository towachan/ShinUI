import Ember from 'ember';

export default Ember.Component.extend({
		actions: {
		leaveDetail: function(leaveId){
			console.log("heh");
			this.sendAction('leaveDetail', leaveId);
			// window.location.href = '/#/leave/details/' + leaveId;
			// this.get('routing').transitionToRoute('/leave/details/' + leaveId);
			// this.transitionToRoute('/home/leaveDetail/'+leaveId);	
			// this.get('detailController').set('leaveId',leaveId);
		}

	}
});
