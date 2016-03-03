
function getDashBoard(req){
		return {
			responseStatus: "success",
			createdByMe:[
				{	type: "annual",
					draft: 22,
					pending: 33,
					approved: 44,
					rejected: 55,
					cancelled: 66,
					total:220
				},
				{	type: "sick",
					draft: 12,
					pending: 24,
					approved: 56,
					rejected: 77,
					cancelled: 66,
					total: 235

				},
				{
					type: "total",
					draft: 34,
					pending: 57,
					approved: 100,
					rejected: 132,
					cancelled: 132,
					total: 455,
				}
				
			],
			pendOnMe:[
				{	type: "annual",
					draft: 122,
					pending: 333,
					approved: 442,
					rejected: 535,
					cancelled: 66,
					total:220


				},
				{	type: "sick",
					draft: 121,
					pending: 324,
					approved: 526,
					rejected: 737,
					cancelled: 66,
					total:220

				},
				{
					type: "total",
					draft: 34,
					pending: 57,
					approved: 100,
					rejected: 132,
					cancelled: 132,
					total: 455,
				}
				
			]
		};
	
	return false;
}

exports.result = getDashBoard;