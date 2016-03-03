import Ember from 'ember';

export default Ember.Controller.extend({
	dashboardData: Ember.inject.service('dashboard-data'),
	tbHead: ["type", "draft", "pending", "approved", "rejected","cancelled", "total"],
	rowHead: [ "Annual", "Sick", "Total"],
	listController: Ember.inject.controller('leave.list'),

	actions:{
		listLeaves: function(position){
			console.log(position);
			this.transitionToRoute('/leave/list/' + position.category + '/' + position.row + '/' + position.col);
		}

	} 
});
