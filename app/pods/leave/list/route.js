import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){
		var controller = this.controllerFor('leave.list');
		var appController = this.controllerFor('application');

		var category = params.category;
		var type = params.type;
		var status = params.status;


		var data = {
				cmd: "leaveList",
				category: category,
				type: type,
				status: status
		};
		this.get('ajaxGeneric').post(data, appController).then(function(response){

			if(response.leaves.length){
				var leaves = controller.get('listArray').sort(response.leaves,"leaveId",1,"string");

				controller.set('leaves', leaves);
				controller.set('recordCount', leaves.length);
				controller.set('currentPage', 0);

				controller.send('sortList',{sortBy:"leaveId", orderBy:0, pageUnit:10});
				controller.set('pageUnit',2);
				controller.set('isSort', false);


			}
			else{
				controller.set('model', response);
				controller.set('isSort',"disabled");
			}

			controller.set('isCancel', false);
			controller.set('isSubmit', false);
			controller.set('isApprove', false);

			if(category === "createdByMe" && (status === "approved" || status === "rejected") ){
				controller.set('isCancel', true);
			}
			else if(category === "createdByMe" && status === "draft"){
				controller.set('isSubmit', true);
			}
			else if(category === "pendOnMe" && status === "pending"){
				controller.set('isApprove', true);
			}

			
		});

	},

	afterModel: function(){
		$("#1").addClass('active');

	}
});
 