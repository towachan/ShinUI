import Ember from 'ember';

export default Ember.Component.extend({
		actions: {
		leaveDetail: function(leaveId){
			window.location.href = '/home/leaveDetail/' + leaveId;
			// this.transitionToRoute('/home/leaveDetail/'+leaveId);	
			// this.get('detailController').set('leaveId',leaveId);
		}

	}
});
