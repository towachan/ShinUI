import Ember from 'ember';

export default Ember.Route.extend({	
	model: function(){
		Ember.$.ajax('requests/leaveDetail',{
			data:{
				leaveId: this.controllerFor('detail').get('leaveId');
			},context: this}).then(function(response){
				console.log(response);
			});
	}
});
