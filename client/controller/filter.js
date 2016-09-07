angular.module('myModule')
//app
.filter('myFilter', function () {
	return function(x) {
	    var i, c, txt = "";
	    for (i = 0; i < x.length; i++) {
	        c = x[i];
	        if (i % 2 == 0) {
	            c = c.toUpperCase();
	        }
	        txt += c;
	    }
	    return txt;
	};
})	// end myFilter
.filter('myFilter1', function () {
	return function(item) {
		var retString = "";

		for(i=0; i<item.length; i++) {
			retString += i % 2 == 0 ? item[i].toUpperCase(): item[i];
		}
	    return retString;
	};
})	// end myFilter1
.filter('myFilter2', function () {
	return function(item, pos) {
		var retString = "";

		for(i=0; i<item.length; i++) {
			retString += i == pos ? item[i].toUpperCase(): item[i];
		}
	    return retString;
	};
})	// end myFilter2