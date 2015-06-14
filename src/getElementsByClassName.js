// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element
){
  // your code here
  var result = [];

  if(!element) {
  	element = document.body;
  }

  var childNodes = element.childNodes;
  var classList = element.classList;

  if(classList !== undefined) {
  	for(var i = 0; i<classList.length;i++) {
  		if(className === classList[i]) {
  			result.push(element);
  		}
  	}
  }

  if(childNodes !== undefined) {
  	for(var i =0; i<childNodes.length; i++) {
  		var node = childNodes[i];
  		Array.prototype.push.apply(result, getElementsByClassName(className,node));
  	}
  }
  
  return result; 
};


