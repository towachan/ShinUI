import Ember from 'ember';

export default Ember.Controller.extend({
	homeController: Ember.inject.controller('home'),
	months: ["January ","February ","March","April","May ","June ","July","August","September ","October","November ","December"],
	initialize: function(){
		this.get('homeController').set('classNames.userInfoClass', 'active');
		var date = new Date();
		this.set('displayMonth',date.getMonth());
		this.set('displayYear',date.getFullYear());
	}.on('init'),
	currentMonth: function(){
		var months = this.get('months');
		var i = this.get('displayMonth');
		return months[i];
	}.property('displayMonth','months'),

	calendar: function(){
		var displayMonth = this.get('displayMonth');
		var displayYear = this.get('displayYear');
		var list = [];
		var work = [];
		var calendar = [];
		var week = {};
		var month = [];
		var dayType = [];
		var date = new Date();
		var firstDay = new Date(displayYear, displayMonth, 1);
		var lastDay = new Date(displayYear, displayMonth + 1, 0);
		var firstDayWeek = firstDay.getDay();
		for(var i=1; i<=lastDay.getDate();i++){



			if(firstDayWeek === 6 || firstDayWeek ===0){
				dayType[i] = "calendar rest";
			}
			else{
				dayType[i] = "calendar";
			}

			if(Ember.$.inArray(i,list) > -1){
				dayType[i] = "calendar rest";
			}

			if(Ember.$.inArray(i,work) > -1 && (firstDayWeek === 6 || firstDayWeek ===0)){
				dayType[i] = "calendar";
			}

			month[i] = firstDayWeek;
			week[firstDayWeek] = {};
			if(date.getFullYear() === displayYear && date.getMonth() === displayMonth && date.getDate() === i)
			{
				week[firstDayWeek].date = i + "*";
			}
			else{
				week[firstDayWeek].date = i;
			}

			week[firstDayWeek].dayType = dayType[i];
			firstDayWeek++;
			if(firstDayWeek > 6 || i === lastDay.getDate()){
				firstDayWeek = firstDayWeek - 7;
				calendar.push(week);
				week = {};
			}
		}

		var firstWeekLength = Object.keys(calendar[0]).length;
		var lastWeekLength = Object.keys(calendar[calendar.length-1]).length;
		var lastMonlastDay = new Date(displayYear, displayMonth, 0).getDate();
		var nextMonFirstDay = 1;

		var firstWeek = calendar[0];
		for(i=0;i<7-firstWeekLength;i++){
			firstWeek[i] = {};
			if(i === 0 || i === 6){
				firstWeek[i].dayType = "calendar notCurrent rest";
			}
			else{
				firstWeek[i].dayType = "calendar notCurrent";
			}
			firstWeek[i].date = lastMonlastDay - (7 - firstWeekLength -1);
			lastMonlastDay++;
		}

		var lastWeek = 	calendar[calendar.length-1];
		for(i=lastWeekLength;i<7;i++){
			lastWeek[i] = {};
			lastWeek[i].date = nextMonFirstDay;
			if(i === 0 || i === 6){
				lastWeek[i].dayType = "calendar notCurrent rest";
			}
			else{
				lastWeek[i].dayType = "calendar notCurrent";
			}
			nextMonFirstDay++;
		}
		for(i=0; i< calendar.length; i++){
			var currentWeek = calendar[i];
			currentWeek.Sun = {};
			currentWeek.Mon = {};
			currentWeek.Tue = {};
			currentWeek.Wed = {};
			currentWeek.Thu = {};
			currentWeek.Fri = {};
			currentWeek.Sat = {};

			currentWeek.Sun = currentWeek[0];
			currentWeek.Mon = currentWeek[1];
			currentWeek.Tue = currentWeek[2];
			currentWeek.Wed = currentWeek[3];
			currentWeek.Thu = currentWeek[4];
			currentWeek.Fri = currentWeek[5];
			currentWeek.Sat = currentWeek[6];
			for(var j=0;j<7;j++){
				delete currentWeek[j];
			}

		}
		return calendar;

	}.property('displayMonth'),

	actions: {
		lastMonth: function(){
			var displayMonth = this.get('displayMonth');
			var displayYear = this.get('displayYear');
			if(displayMonth === 0){
				displayMonth = 12;
				this.set('displayYear', displayYear-1);
			}
			this.set('displayMonth',displayMonth-1);
		},
		nextMonth: function(){
			var displayMonth = this.get('displayMonth');
			var displayYear = this.get('displayYear');
			if(displayMonth === 11){
				displayMonth = -1;
				this.set('displayYear', displayYear+1);
			}
			this.set('displayMonth',displayMonth+1);
		}

	}

});
