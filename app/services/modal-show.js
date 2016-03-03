import Ember from 'ember';

export default Ember.Service.extend({

	show: function(controller, modalHeader, msgType, modalMsg, modalReload, modalId, jumpTo,){
		controller.set('modalHeader', modalHeader);
		controller.set('modalMsg', modalMsg);
		controller.set('modalReload', modalReload);

		controller.set('modalIsError', false);
		controller.set('modalIsSuccess', false);
		controller.set('modalIsInfo', false);

		console.log(msgType);
		

		if(msgType === "error"){
			controller.set('modalIsError', true);
		}
		if(msgType === "success"){
			controller.set('modalIsSuccess', true);
		}
		if(msgType === "info"){
			controller.set('modalIsInfo', true);
		}

		Ember.$(modalId).modal();
		console.log(jumpTo);
		if(jumpTo){
			controller.transitionToRoute(jumpTo);	
		}
	}
});
