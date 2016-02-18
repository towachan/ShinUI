import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(params){
		Ember.$.ajax({
			url: 'requests/leaves/' + params.leaveId,
			context: this,
			success: function(response){
				console.log(response.data);
				if(response.result){
					var controller = this.controller;
					var currentStaff = this.controllerFor('home').get('model').staffId;
					if(currentStaff === response.data.approverId){
						controller.set('isApprover',true);
						this.controllerFor('home').set('classNames.approveReqClass', 'active');
					}
					if(currentStaff === response.data.staffId){
						controller.set('isRequester',true);
						this.controllerFor('home').set('classNames.leaveListClass', 'active dropdown');
					}

					controller.set('model', response.data);
				}
			}
		});
	}
});
