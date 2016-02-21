import Ember from 'ember';

export default Ember.Controller.extend({
	initialize: function(){
		// this.get('homeController').set('classNames.leaveListClass', 'active');


	}.on('init'),


	actions: {
		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			Ember.$('#confirmModal').modal();
		},
		back: function(){
			history.go(-1);
		}
	}

});
