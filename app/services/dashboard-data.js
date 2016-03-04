import Ember from 'ember';

export default Ember.Service.extend({

	calcTotal: function(inArr, keyArr){
		var typeTotal = { type: "total" };
		for(var h=0; h<keyArr.length; h++){
			var _k = keyArr[h]; 
			typeTotal[_k] = 0;
		}

		for(var i=0; i<inArr.length; i++){
			var t = 0
			for(var key in inArr[i]){
				if(typeof inArr[i][key] === "number"){
					typeTotal[key] = typeTotal[key] + inArr[i][key];
					t = t + inArr[i][key];
				}
			}
			inArr[i]["total"] = t;
		}

		var tt = 0;
		for(var key in typeTotal){
			if(typeof typeTotal[key] === "number" ){
				tt = tt + typeTotal[key];
			}
		}
		typeTotal.total = tt;
		inArr.push(typeTotal);

		return inArr;
	},


	convert: function(table, colOrder, rowOrder, headClass, dtClass){
		var t = [];
		for(var i=0; i< table.length; i++){
			var objLength = this.get('objLength')(table[i]);
			var r = [];
			// console.log("objLength");
			for(var j=0; j<objLength; j++){
				r[j] = table[i][colOrder[j]];
			}
			var firstCaseChg = this.get('firstCaseChg');
			r =	this.get('expand')(r, colOrder, rowOrder[i], headClass, dtClass, firstCaseChg);
			t.push(r);
		}
		return t;
	},

	expand: function(r, colOrder, row, headClass, dtClass, firstCaseChg){
		for(var m=0; m<r.length; m++){
			
			if(m === 0){
				r[m] = firstCaseChg(r[m], 1);
				r[m] = {cls: headClass, dt: r[m]};
			} 
			else{
				r[m] = {cls: dtClass, dt: r[m], position:{row: row, col: colOrder[m] }};
			}
		}
		return r;
	},

	objLength: function(obj){
		var i = 0;
		for(var p in obj){
			i++;
		}
		return i;
	},

	firstCaseChg: function(str,type){
		var o = [];
		for(var i=0; i<str.length; i++){
			if(i===0){
				if(type === 1){
					o[i] = str[0].toUpperCase();
				}
				else{
					o[i] = str[0].toLowerCase();
				}
			}
			else{
			 o[i] = str[i];
			}
				
		}
		return o.toString().replace(/,/g,"");

	},
});
