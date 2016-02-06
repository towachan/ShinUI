import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		if(document.cookie.toString().indexOf("sessionId") > -1){
			Ember.$.ajax('requests/getSession', 
				{context: this}).then(function(response){
					if(response.result){
						console.log(response.result.user);
						this.set('userType', parseInt(response.result.user.userType));
						if(this.get('userType') === 0){
							this.set('isAdmin', true)
						}

						this.controllerFor('application').set('userName', response.result.user.staffName.toString());
						this.set('model',response.result.user);
						return true;
					}
					else{
						window.location.href = 'login';
						return false;
					}

				});
		}
		else{
			window.location.href = 'login';
			return false;
		}
	}
});
