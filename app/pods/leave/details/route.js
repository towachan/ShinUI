import Ember from 'ember';

export default Ember.Route.extend({	


	model: function(params){
		Ember.$.ajax({
			url: 'requests/leaves/' + params.leaveId,
			context: this,
			success: function(response){
				if(response.result){
					var controller = this.controller;
					controller.set('model', response.data);
					controller.set('approver', response.data.leave.approverId);
					controller.set('requester', response.data.leave.requesterId);
					controller.set('status', response.data.leave.status);

				}
			}
		});
	},
});


					
					
