import Ember from 'ember';

export default Ember.Service.extend({
	sort: function (inputArr, key, sortby, type){
		var middleArr = [];
		var outputArr = [];
		sortby = Number(sortby);
		for(var i=0; i<inputArr.length; i++){
			middleArr.push(inputArr[i][key]);
		}
		console.log(middleArr);

		if(type === "number"){
			if(sortby === 1){
				middleArr.sort(function(a, b){return a-b});
			}
			else{
				middleArr.sort(function(a, b){return b-a});
			}
		}
		else{
			console.log("string: " + typeof sortby + sortby);
			if(sortby === 1){
				middleArr.sort();
				console.log('sort1');
			}
			else{
				middleArr.sort();
				middleArr.reverse();
				console.log('sort0');
			}
		}
		console.log(middleArr);


		for(var j=0; j<middleArr.length; j++){
			for(var k=0; k<inputArr.length; k++){
				if(middleArr[j] === inputArr[k][key]){
					outputArr[j] = inputArr[k];
				}
			}
		}

		console.log(outputArr);
		return outputArr;

	},

	splitArr: function(inArr, splitUnit){
		var outArr = [];
		while(inArr.length){
			var arr = inArr.splice(0,splitUnit);
			outArr.push(arr);
		}
		return outArr;
	}
});
