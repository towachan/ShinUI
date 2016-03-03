import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(){
		var data = {
			cmd: 'leaveDashboard'
		};

		var appController = this.controllerFor('application');
		var controller = this.controllerFor('dashboard.leave');
		this.get('ajaxGeneric').post(data, appController).then(function(response){
			// console.log(response);
			var rowHead = controller.get('rowHead');
			var tbHead = controller.get('tbHead');

			var createdByMe = controller.get('dashboardData').convert(response.createdByMe, tbHead, rowHead, "header", "clkCell" );
			var pendOnMe = controller.get('dashboardData').convert(response.pendOnMe, tbHead, rowHead, "header", "clkCell");
			
			var model = {createdByMe: createdByMe, pendOnMe:pendOnMe};

			controller.set('model', model);
		});

	}
});
