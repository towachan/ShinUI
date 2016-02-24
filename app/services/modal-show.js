import Ember from 'ember';

export default Ember.Service.extend({

	show: function(controller, modalHeader, modalMsg, modalReload, modalId, jumpTo){
		controller.set('modalHeader', modalHeader);
		controller.set('modalMsg', modalMsg);
		controller.set('modalReload', modalReload);
		Ember.$(modalId).modal();
		console.log(jumpTo);
		if(jumpTo){
			controller.transitionToRoute(jumpTo);	
		}
	}
});
