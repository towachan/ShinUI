import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition){
		var leaveId = transition.queryParams.leaveId;
       	// alert(leaveId);
	    Ember.$.ajax({
			url: 'requests/quickApprove',
			context: this,
			data: {
				leaveId: leaveId
			},
			success: function(response){
				if(response.result){
					document.cookie="sessionId=" + response.data.sessionId;
					this.transitionTo ('/leave/details/' + leaveId.toString());

				}

			}
		});
   }


});
