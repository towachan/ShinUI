
function getEntitle(){
	return {
		cmd: 'leaveEntitle',
		responseStatus: 'success',

		leaveEntitlements:[
			{
				type: "annual",
				unit: "HWD",
				entitlement: "20",
				pending: "0",
				taken: "1",
				balance: "19",
				expirationDate: "2016-12-31"
			},
			{
				type: "sick",
				unit: "HWD",
				entitlement: "10",
				pending: "0",
				taken: "0",
				balance: "0",
				expirationDate: "2016-12-31"
			}
		]
		
	}
}



exports.result = getEntitle;