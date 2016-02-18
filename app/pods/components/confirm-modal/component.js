import Ember from 'ember';

export default Ember.Component.extend({	
	actions: {
		confirmRequest: function(leaveId){
			var reqType = this.get('confirmMsg');
			var comments = this.get('comments');

			console.log(reqType + ":" + comments);

			Ember.$.ajax({
				url: 'requests/' + reqType + 'Leave',
				context: this,
				data:{
					leaveId: leaveId,
					comments: comments
				},
				success: function(response){
					if(response.result){
						console.log(response.message);
						this.set('reqMsg', response.message);
						this.set('requestResult', response.result);
						Ember.$('#alertModal').modal();
					}
				}
			});
		}
	}
});
