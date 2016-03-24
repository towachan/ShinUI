import Ember from 'ember';

export default Ember.Component.extend({
	isShow: false,
	actions: {
		toggle: function(){
			var toggleIcon = '#toggle-icon';
			if(this.get('isShow')){
				$(toggleIcon).removeClass('glyphicon-minus');
				$(toggleIcon).addClass('glyphicon-plus');
				this.set('isShow', false);
			}
			else{
				$(toggleIcon).removeClass('glyphicon-plus');
				$(toggleIcon).addClass('glyphicon-minus');
				this.set('isShow', true);
			}
		}
	}
});
