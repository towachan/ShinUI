import Ember from 'ember';

export default Ember.Service.extend({
	convert: function(table, colOrder, rowOrder, headClass, dtClass){
		var t = [];
		for(var i=0; i< table.length; i++){
			var objLength = this.get('objLength')(table[i]);
			var r = [];
			// console.log("objLength");
			for(var j=0; j<objLength; j++){
				r[j] = table[i][colOrder[j]];
			}
			r =	this.get('expand')(r, colOrder, rowOrder[i], headClass, dtClass);
			t.push(r);
		}
		return t;
	},

	expand: function(r, colOrder, row, headClass, dtClass){
		for(var m=0; m<r.length; m++){
			
			if(m === 0){
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
	}
});
