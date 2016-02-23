import Ember from 'ember';

export default Ember.Controller.extend({
	initialize: function(){
		// this.get('homeController').set('classNames.leaveListClass', 'active');

	}.on('init'),
	appController: Ember.inject.controller('application'),
	actions: {
		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			Ember.$('#confirmModal').modal();
		},

		confirm: function(params){
			var leaveId = this.get('model').leaveId;
			var reqType = params.reqType;
			var comments = params.comments;
			console.log(reqType);
			console.log(comments);
			Ember.$.ajax({
				url: 'requests/',
				context: this,
				data:{
					cmd: reqType + 'Leave',
					data:{
						leaveId: leaveId,
						comments: comments
					}
				},
				success: function(response){
					var appController = this.get('appController');
					if(response.responseStatus === "success"){
						appController.set('modalMsg', "Operation success!");
						appController.set('modalHeader', "System Message");
						appController.set('modalReload', true);
					}
					else{
						appController.set('modalMsg',"Operation fail!");
						appController.set('modalHeader', "System Error");
						appController.set('modalReload', false);
						//show error msg
					}
					Ember.$('#alertModal').modal();
				}
			});
		}
	}

});
