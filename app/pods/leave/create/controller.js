import Ember from 'ember';

export default Ember.Controller.extend({
	staffId: null,
	staffName: null,
	startDate: null,
	endDate:null,
	leaveType: "Annual",
	startHalf: 'AM',
	endHalf: 'AM',
	halfDays: ['AM','PM'],
	leaveTypes: ["Annual", "Sick"],
	// errorMsg: null,
	isError: null,
	dateValidation: null,
	comments: null,
	appController: Ember.inject.controller('application'),
	initialize: function(){
		Ember.$.fn.datepicker.defaults.format = "yyyy/mm/dd";
	}.on('init'),

	leaveDays: function(){
		var startDate = this.get('startDate');
		var endDate = this.get('endDate');
		var startHalf = this.get('startHalf');
		var endHalf = this.get('endHalf');



		if(typeof startDate === "string" && startDate != "" && typeof endDate === "string" && endDate != ""){
			var start = moment(startDate, "YYYY-MM-DD");
			var end = moment(endDate, "YYYY-MM-DD");
			var today = moment();

			if(!start.isSameOrBefore(end,'day') ){
				this.set('dateValidation', false);
				this.set('errorMsg', "Start day is before end day.");
			}
			else if((start.isSame(today,'day') && startHalf === "AM" && today.hour() <= 14 )|| 
				(end.isSame(today,'day') && endHalf === "AM" && today.hour() <= 14 )|| 
				(start.isSame(today,'day') && today.hour() > 14) ||
				(end.isSame(today,'day') && today.hour() > 14)){
				this.set('dateValidation', false);
				this.set('errorMsg', "Start/end date is before current time.");
			}
			else if(start.isBefore(today,'day') || end.isBefore(today,'day') ){
				this.set('dateValidation', false);
				this.set('errorMsg', "Start/end day is before today.");
			}
			else if(start.isSame(end,'day') && startHalf === "PM" && endHalf === "AM"){
				this.set('dateValidation', false);
				this.set('errorMsg', "Start date is before end date(PM/AM).");
			}
			else if(start.day() === 0 || start.day() === 6 || end.day() === 0 || end.day() === 6){
				this.set('dateValidation', false);
				this.set('errorMsg', "Start/end day is Sun or Sat.");
			}
			else {
				var total = end.diff(start, 'days'); 
				if(total > 5){
					var first = start.clone().endOf('week'); // end of first week
				  	var last = end.clone().startOf('week'); // start of last week
				  	var days = last.diff(first,'days') * 5 / 7; // this will always multiply of 7
				  	var wfirst = first.day() - start.day(); // check first week
				  	if(start.day() == 0) --wfirst; // -1 if start with sunday 
				  	var wlast = end.day() - last.day(); // check last week
				  	if(end.day() == 6) --wlast; // -1 if end with saturday
				  	total = (wfirst + days + wlast); // get the total
				}
				else {
					total++;
				}

				total = total * 2;

				if(startHalf === "PM"){
					total = total - 1;
				}
				if(endHalf === "AM"){
					total = total - 1;
				}
				this.set('dateValidation', true);
				this.set('errorMsg', "");
				return total;
			}

			
		}
		else{
			this.set('dateValidation', false);
			this.set('errorMsg', "Please Input a valid leave duration.");
			return null;
		}

	}.property('startDate','endDate','startHalf','endHalf'),



	leaveDaysValidation: function(){
		var leaveType = this.get('leaveType');
		var leaveDays = this.get('leaveDays');
		var model = this.get('model');
		if(leaveDays != null ){
			if(leaveType === "Annual"){
				var entitle = this.get('model').leaveEntitlements[0];
				var entitlement = entitle.entitlement;
				var balance = entitle.balance;
			}
			if(leaveType === "Sick"){
				var entitle = this.get('model').leaveEntitlements[1];
				var entitlement = entitle.entitlement;
				var balance = entitle.balance;
			}

			if(leaveDays > entitlement){
				this.set('errorMsg', "Request Days is more than entitlement days.");
				return false;
			}
			else if(leaveDays > balance){
				this.set('errorMsg', "Request Days is more than balance days.");
				return false;
			}


			return true;
		}
		else{
			return false;
		}


	}.property('leaveType','leaveDays'),

	submitDisabled: "disabled",
	isSubmit: function(){
		if(this.get('dateValidation') && this.get('leaveDaysValidation')){
			this.set('submitDisabled',false);
			return true;
		}
		else{
			this.set('submitDisabled', "disabled");
 			return false;
		}

	}.property('dateValidation','leaveDaysValidation'),

	actions: {
		leaveTypeChange: function(){
			var leaveType = Ember.$("#leaveType").val();
			this.set('leaveType', leaveType);
		},

		startHalfChange: function(){
			var startHalf = Ember.$("#startHalf").val();
			this.set('startHalf', startHalf);
		},
		endHalfChange: function(){
			var endHalf = Ember.$("#endHalf").val();
			this.set('endHalf', endHalf);
		},

		submit: function(){

			var data = {
				staffId: this.get('currentUser').staffId,
				staffName: this.get('currentUser').staffName,
				title: this.get('currentUser').title,
				startDate: this.get('startDate'),
				startHalf: this.get('startHalf'),
				endDate: this.get('endDate'),
				endHalf: this.get('endHalf'),
				leaveDays: this.get('leaveDays'),
				leaveType: this.get('leaveType'),
				comments: this.get('comments'),
				createTime: moment().format("YYYY/MM/DD HH:mm:ss")
			};

			Ember.$.ajax({
				url: 'requests/',
				context: this,
				data: {
					cmd: 'submitLeave',
					data: data
				},
				success: function(response){
					var appController = this.get('appController');
					if(response.responseStatus == "success"){
						appController.set('modalHeader', "Submit success!");
						appController.set('modalMsg', "Approve link is " + response.data.approveLink);
						appController.set('modalReload', true);
					}
					else{
						appController.set('modalHeader', response.errorCode);
						appController.set('modalMsg', response.errMessage);
						appController.set('modalReload', false);

					}

					Ember.$('#alertModal').modal();

				}
			});

		}
	}
});
