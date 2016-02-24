import Ember from 'ember';

export default Ember.Service.extend({
	modalShow: Ember.inject.service('modal-show'),
	cookieCheck: function(){
		if(document.cookie.toString().indexOf("sessionId") > -1){
			return true;
		}
		else{
			return false;
		}
	},


	post: function(data, appController ){
		var url = 'requests/';
		var promise = new Ember.RSVP.Promise(function(resolve, reject){
			Ember.$.ajax({
				url: url,
				type: 'get',
				contentType: 'application/json; charset=utf-8', // Type of data sent to server
				data: data,
				dataType: 'json',
				context: appController,

				success: function(response){
					if(response.responseStatus === "success"){
						resolve(response);
					}
					else{
						if(response.errorCode === "sessionUnValid"){
							appController.get('modalShow').show(appController, "Error", response.errorMessage, true, "#alertModal", "/login");
						}
						if(response.errorCode === "LOGINVALIDATE"){
							appController.get('modalShow').show(appController, "Log In Fail", response.errorMessage, false, "#alertModal");
						}
						// reject(response);
					}
				}
			});
		});
		return promise;

	},

});
