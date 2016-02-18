import Ember from 'ember';

export default Ember.Controller.extend({
	homeController: Ember.inject.controller('home'),
	initialize: function(){
		this.get('homeController').set('classNames.approveReqClass', 'active');
	}.on('init'),
});
