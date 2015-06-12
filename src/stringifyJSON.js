// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var type = typeof obj;

  if(obj === null) {
  	return 'null';
  }

  if(type == 'undefined') {
  	return 'undefined';
  }

  if(type === 'string') {
  	return '"' + obj.toString() + '"';
  } 

    if(type === 'number') {
  	return  obj.toString();
  } 

  if(type === 'function') {
  	return  obj.toString();
  } 

  if(Array.isArray(obj)) {
  	var arr = '[';
  	for(i=0;i<obj.length;i++){
  		if(i !== 0) {
  			arr+= ',';
  		}
  		arr += stringifyJSON(obj[i]);
  	}
 	arr += ']';
 	return arr;
  }

    if(type === 'object') {
    	var ob = '{';
    	var isFirst = true;
    	for(prop in obj) {
    		var valueType = typeof obj[prop];
    		if(valueType !== 'undefined' && valueType !== 'function' ) {
    				if(isFirst) {
    					isFirst = false;
    				} else {
    					ob += ',';
    				}
    				ob += '"' + prop.toString() + '":' + stringifyJSON(obj[prop]);
    			}
    		}

    		
    	ob += '}';
    	return ob;
  }


  return obj.toString();
};
