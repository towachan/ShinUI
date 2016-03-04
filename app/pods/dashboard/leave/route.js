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
			var createdByMe = response.createdByMe;
			var pendOnMe = response.pendOnMe;

			var rowHead = controller.get('rowHead');
			var tbHead = controller.get('tbHead');
			tbHead[0] = "type";
			for(var i=1; i<tbHead.length; i++){
				tbHead[i] = controller.get('dashboardData').firstCaseChg(tbHead[i], 0);
			}

			var keyArr = ["draft", "pending", "approved", "rejected", "cancelled"];

			createdByMe = controller.get('dashboardData').calcTotal(createdByMe, keyArr);
			pendOnMe = controller.get('dashboardData').calcTotal(pendOnMe, keyArr);

			createdByMe = controller.get('dashboardData').convert(createdByMe, tbHead, rowHead, "header", "clkCell" );
			pendOnMe = controller.get('dashboardData').convert(pendOnMe, tbHead, rowHead, "header", "clkCell");
			
			var model = {createdByMe: createdByMe, pendOnMe:pendOnMe};

			controller.set('model', model);

		});

	}
});
