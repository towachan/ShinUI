import Ember from 'ember';

export default Ember.Route.extend({
	ajaxGeneric: Ember.inject.service('ajax-generic'),
	model: function(params){
		var controller = this.controllerFor('leave.list');
		var appController = this.controllerFor('application');
		console.log(params);
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
				
				var leavesPaged = controller.get('listArray').splitArr(leaves.slice(0), 2);

				controller.set('leavesPaged', leavesPaged);

				var pages = [];
				for(var i=0; i<leavesPaged.length; i++){
					var number = i+1;
					pages.push(number);
				}

				controller.set('pages', pages);
				controller.set('currentPage', 0);

				controller.set('model', leavesPaged[0]);
				controller.set('isSort', false);
			}
			else{
				controller.set('model', response);
				controller.set('isSort',"disabled");
			}

			controller.set('isCancel', false);
			controller.set('isSubmit', false);
			controller.set('isApprove', false);

			if(category === "createdByMe" && status === "pending"){
				controller.set('isCancel', true);
			}
			else if(category === "createdByMe" && status === "draft"){
				controller.set('isSubmit', true);
			}
			else if(category === "pendOnMe" && status === "pending"){
				controller.set('isApprove', true);
			}

			console.log(category);
			
		});

	},

	afterModel: function(){
		$("#1").addClass('active');

	}
});
 