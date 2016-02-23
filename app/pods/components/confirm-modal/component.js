import Ember from 'ember';

export default Ember.Component.extend({	
	actions: {
		confirmRequest: function(leaveId){
			var reqType = this.get('confirmMsg');
			var comments = this.get('comments');

			console.log(reqType + ":" + comments);

			this.sendAction('confirmRequest', {reqType: reqType, comments: comments});
		}
	}
});
