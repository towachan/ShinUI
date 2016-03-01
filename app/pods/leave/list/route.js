import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){
		var controller = this.controllerFor('leave.list');
		var appController = this.controllerFor('application');
		console.log(params);
		var category = params.category;
		var type = params.type;
		var status = params.status;


		var data = {
				cmd: "leaveList",
				category: category,
				type: type,
				status: status
		};
		this.get('ajaxGeneric').post(data, appController).then(function(response){
			controller.set('model', response);
			if(category === "createdByMe" && status === "pending"){
				controller.set('isCancel', true);
			}
			else if(category === "createdByMe" && status === "draft"){
				controller.set('isSubmit', true);
			}
			else if(category === "pendOnMe" && status === "pending"){
				controller.set('isApprove', true);
			}

			console.log(category);
			
		});

	}
});
 