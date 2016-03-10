import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		list: function(position){
			if(position !== {}){
				position.category = this.get('category');
				this.sendAction('list', position);
				
			}
		}
	}
});
