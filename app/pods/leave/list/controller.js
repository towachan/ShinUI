import Ember from 'ember';

export default Ember.Controller.extend({
	isCancel: false,
	isSubmit: false,
	isApprove: false,
	detailsController: Ember.inject.controller('leave.details'),
	multiArr: [],
	actions: {
		leaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		},

		multi: function(leaveId){
			var multiArr = this.get('multiArr');
			var domLeaveId = "#" + leaveId;
			console.log(domLeaveId);
			if($(domLeaveId).hasClass("selected")){
				$(domLeaveId).removeClass("selected");
				multiArr = $.grep(multiArr, function(value) {
  					return value != leaveId;
				});
			}
			else {
				$(domLeaveId).addClass("selected");
				multiArr.push(leaveId);

			}
			this.set('multiArr', multiArr);
		},

		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			Ember.$('#confirmModal').modal();
		},

		confirm: function(params){
			// var leaveId = this.get('model').leave.leaveId;
			var leaves = this.get('multiArr');
			var reqType = params.reqType;
			var comments = params.comments;


			var _this = this;
			var appController = this.get('appController');

			var data = {
					cmd: reqType + 'Leave',
					leaves: leaves,
					comments: comments
					
				};

			this.get('ajaxGeneric').post(data, appController).then(function(response){
				appController.get('modalShow').show(appController, 
											"System Message",
											 "Operation success!",
											  true, "#alertModal");
			});

		}
	}

});
