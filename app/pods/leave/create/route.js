import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(){
		var data_le = {
				cmd: 'leaveEntitle'
		};
		var data_ui = {
				cmd: 'refresh'
		};
		var controller = this.controllerFor('leave.create');
		var appController = this.controllerFor('application');


		this.get('ajaxGeneric').post(data_le, appController).then(function(response){
			controller.set('model', response);
		});

		this.get('ajaxGeneric').post(data_ui, appController).then(function(response){
			controller.set('currentUser', response);
		});

		

	}
});
