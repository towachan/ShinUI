import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		requestCompleted: function(requestResult){
			if(requestResult){
				location.reload();
			}
		},
	}
});
