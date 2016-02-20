import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		Ember.$.ajax({
			url: 'requests/quickApprove/' + params.leaveId,
			context: this,
			success: function(response){
				if(response.result){
					console.log(response);
					// document.cookie = document.cookie + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
					console.log(document.cookie);
					document.cookie="sessionId=" + response.data.sessionId.toString();
					console.log(document.cookie);
					// window.location.href= '/leave/details/' + response.data.leaveId.toString(); 
					// this.transitionTo('/leave/details/' + response.data.leaveId.toString());
				}
			}
		});

	}

});