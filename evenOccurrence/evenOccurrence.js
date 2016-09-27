// Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurrence (arr) {

var storage = {};
  for(var i = 0; i < arr.length; i++){
  	if(arr[i].indexOf !== -1){
  			storage['p' + [arr[i]]] = 0;
  	}
  }
  for(var j = 0; j < arr.length; j++){
  	if(storage.hasOwnProperty('p' + arr[j])){
  		storage['p' + arr[j]] += 1;
  	}
  }
  for(var key in storage){
  	if(storage[key] % 2 === 0){
  		var result = key.replace('p', '');
  		if(Number(result)){
  			result = Number(result);
  		}
  		return result;
  	}
  }
  return null;
}