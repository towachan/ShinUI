import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(){
		var controller = this.controllerFor('leave.list');
		var appController = this.controllerFor('application');
		var data = {
				cmd: "leaveList",
				category: controller.get('category'),
				type: controller.get('type'),
				status: controller.get('status')
		};
		this.get('ajaxGeneric').post(data, appController).then(function(response){
			controller.set('model', response);
		});

	}
});
 