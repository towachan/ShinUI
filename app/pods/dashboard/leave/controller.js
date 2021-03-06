import Ember from 'ember';

export default Ember.Controller.extend({
	dashboardData: Ember.inject.service('dashboard-data'),
	_tbHead: ["type", "draft", "pending", "approved", "rejected","cancelled", "total"],
	tbHead: [" ", "Draft", "Pending", "Approved", "Rejected","Cancelled", "Total"],
	rowHead: [ "Annual", "Sick", "Total"],
	listController: Ember.inject.controller('leave.list'),
	leaveShow: true,
	travelShow: false,

	actions:{

		toggle: function(db) {
			var isShow = this.get(db);
			if(isShow){
				this.set(db, false);
			}
			else{
				this.set(db, true);
			}
		},

		listLeaves: function(position){
			console.log(position);
			position.row = this.get('dashboardData').firstCaseChg(position.row, 0);
			this.transitionToRoute('/leave/list/' + position.category + '/' + position.row + '/' + position.col);
		}

	} 
});
