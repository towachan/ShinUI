import Ember from 'ember';

export default Ember.Component.extend({
	isExpand: false,
	dashboardExpand: false,
	myLeaveExpand: false,
	isRight: true,
	isDown: false,
	winWide: window.innerWidth,
	isSide: function(){
		if(this.get('winWide') < 1137){
			return false;
		}
		return true;
	}.property('winWide'),

	actions: {

		logout: function(){

			this.sendAction('logout');
		},

		switch: function(){
			this.sendAction('switch');
		},

		navi: function(route){
			this.sendAction('navi', route);
		},

		toggleExpand: function(event){
			var id = event.target.id;
			if(id === ""){
				var parent =  $(event.target).parent().attr('id');
				var chevronid = "#" + parent + "-chevron";
			}
			else if(id.indexOf("-chevron") > -1){
				var parent =  $(event.target).parent().attr('id');
				var chevronid = "#" + id;
			}
			else{
				var parent = id;
				var chevronid = "#" + id + "-chevron";
			}
			var isExpand = parent + "Expand";
			console.log(isExpand);
			if($(chevronid).hasClass("glyphicon-plus")){
				this.set(isExpand, true);
				$(chevronid).removeClass("glyphicon-plus");
				$(chevronid).addClass("glyphicon-minus");
			}
			else{
				this.set(isExpand, false);
				$(chevronid).removeClass("glyphicon-minus");
				$(chevronid).addClass("glyphicon-plus");
			}

			console.log(this.get(isExpand));
		},

		jumpToTop: function(){
			    $('html, body').animate({
        			scrollTop: $("#section1").offset().top
    			}, 1000);
		}
	}
});
