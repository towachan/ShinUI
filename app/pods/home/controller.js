import Ember from 'ember';

export default Ember.Controller.extend({
	classNames: {
		userInfoClass: "",
		leaveListClass: "",
	},

	applicationController: Ember.inject.controller('application'),
	initialize: function(){
		var classNames = this.get('classNames');
		for(var c in classNames){
			classNames[c] = classNames[c].toString().replace("active", "");
		}
		this.set('classNames', classNames);
	}.on('init')
});