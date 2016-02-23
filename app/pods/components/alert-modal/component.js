import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		reload: function(){
			if(this.get('isReload')){
				location.reload();
			}
		}
	}
});
