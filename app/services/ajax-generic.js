import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
	modalShow: Ember.inject.service('modal-show'),
	cookieCheck: function(){
		if(document.cookie.toString().indexOf("JSESSIONID") > -1){
			return true;
		}
		else{
			return false;
		}
	},


	post: function(data, appController ){
		appController.get('spinner').spin(document.body);
		appController.set('isLoading', true);
		var url = config.APP.ajax;
		var promise = new Ember.RSVP.Promise(function(resolve, reject){
			Ember.$.ajax({
				url: url,
				type: 'post',
				contentType: 'application/json; charset=utf-8', // Type of data sent to server
				data: JSON.stringify(data),
				dataType: 'json',
				context: appController,


				success: function(response){
					appController.get('spinner').stop();
					appController.set('isLoading', false);
					if(response.responseStatus === "success"){
						resolve(response);
					}
					else{
						if(response.errorCode === "sessionUnValid"){
							appController.get('modalShow').show(appController, "Session Unvalid", "error", response.errorMessage, true, "#alertModal", "/login");
						}
						if(response.errorCode === "LOGINVALIDATE"){
							appController.get('modalShow').show(appController, "Log In Fail", "error", response.errorMessage, false, "#alertModal");
						}
						// reject(response);
					}
				},

				error: function(){
					appController.get('spinner').stop();
					appController.set('isLoading',false);

					appController.get('modalShow').show(appController, "Network Problem", "error", "Can not get response from server!",false, "#alertModal");
				}
			});
		});
		return promise;

	},

});
