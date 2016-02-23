import Ember from 'ember';

export default Ember.Component.extend({
	classNames: {
		userInfoClass: "",
		leaveListClass: "",
		approveReqClass:""
	},
	initialize: function(){
		var classNames = this.get('classNames');
		for(var c in classNames){
			classNames[c] = classNames[c].toString().replace("active", "");
		}
		this.set('classNames', classNames);
	}.on('init'),

	actions: {
		logout: function(){
			Ember.$.ajax({
				url: 'requests/',
				data:{
					cmd: 'logout'
				}
			});
			this.sendAction('logout');
		}
	}
});
