import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){
		// console.log(params.listStatus);
		var controller = this.controllerFor('leave.list');
		var appController = this.controllerFor('application');
		var data = {
				cmd: params.listStatus
		};

		this.get('ajaxGeneric').post(data, appController).then(function(response){
			controller.set('model', response.data);
		});

	}
});
 