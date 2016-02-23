import Ember from 'ember';

export default Ember.Service.extend({
	cookieCheck: function(){
		if(document.cookie.toString().indexOf("sessionId") > -1){
			return true;
		}
		else{
			return false;
		}
	},


	post: function(data, controller){
		var url = 'requests/';
		var promise = new Ember.RSVP.Promise(function(resolve, reject){
			Ember.$.ajax({
				url: url,
				type: 'get',
				contentType: 'application/json; charset=utf-8', // Type of data sent to server
				data: data,
				dataType: 'json',
				context: controller,

				success: function(response){
					console.log(controller);
					if(response.responseStatus === "success"){
						resolve(response);
					}
					else{
						// if(response.errorCode === "sessionUnValid"){
							controller.set('modalHeader', "Error");
							controller.set('modalMsg', response.errMessage);
							controller.set('modalReload', true);
							Ember.$('#alertModal').modal();
							controller.transitionToRoute('/login');	
						// }
						// reject(response);
					}
				}
			});
		});
		return promise;

	}

});
