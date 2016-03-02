import Ember from 'ember';

export default Ember.Controller.extend({
	detailsController: Ember.inject.controller('leave.details'),
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	appController: Ember.inject.controller('application'),
	multiArr: [],
	isAction: "disabled",
	actions: {
		leaveDetail: function(leaveId){
			this.transitionToRoute('/leave/details/' + leaveId);
		},

		multi: function(leaveId){
			var multiArr = this.get('multiArr');
			var domLeaveId = "#" + leaveId;
			if($(domLeaveId).hasClass("info")){
				$(domLeaveId).removeClass("info");
				multiArr = $.grep(multiArr, function(value) {
  					return value != leaveId;
				});
			}
			else {
				$(domLeaveId).addClass("info");
				multiArr.push(leaveId);

			}
			this.set('multiArr', multiArr);
			if(multiArr.length === 0){
				this.set('isAction', "disabled");
			}
			else{
				this.set('isAction', false);
			}

		},

		confirmReq: function(msg){
			console.log('confirmReq');
			this.set('confirmMsg', msg);
			// Ember.$('#confirmModal').modal();
			Ember.$('#confirmModal').appendTo('body').modal('show');
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
