import Ember from 'ember';

export default Ember.Controller.extend({
	dashboardData: Ember.inject.service('dashboard-data'),
	tbHead: ["type", "draft", "pending", "approved", "rejected"],
	rowHead: [ "Annual", "Sick"],
	listController: Ember.inject.controller('leave.list'),

	actions:{
		listLeaves: function(position){
			this.get('listController').set('status', position.col);
			this.get('listController').set('type', position.row);
			this.get('listController').set('category', position.category);

			this.transitionToRoute('leave.list');
		}

	} 
});
