import Ember from 'ember';

export default Ember.Component.extend({
	classNames: {
		userInfoClass: "",
		leaveListClass: "",
		approveReqClass:""
	},
	isExpand: false,
	dashboardExpand: false,
	myLeaveExpand: false,
	isRight: true,
	isDown: false,
	initialize: function(){
		var classNames = this.get('classNames');
		for(var c in classNames){
			classNames[c] = classNames[c].toString().replace("active", "");
		}
		this.set('classNames', classNames);
	}.on('init'),

	actions: {
		logout: function(){

			this.sendAction('logout');
		},

		switch: function(){
			this.sendAction('switch');
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
		}
	}
});
