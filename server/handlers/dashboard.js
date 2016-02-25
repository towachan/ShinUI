
function getDashBoard(req){
	if(req.body.type === "leave"){
		return {
			responseStatus: "success",
			createdByMe:[
				{	type: "annual",
					draft: 22,
					pending: 33,
					approved: 44,
					rejected: 55
				},
				{	type: "sick",
					draft: 12,
					pending: 24,
					approved: 56,
					rejected: 77
				}
				
			],
			pendOnMe:[
				{	type: "annual",
					draft: 122,
					pending: 333,
					approved: 442,
					rejected: 535
				},
				{	type: "sick",
					draft: 121,
					pending: 324,
					approved: 526,
					rejected: 737
				}
				
			]
		};
	}
	return false;
}

exports.result = getDashBoard;