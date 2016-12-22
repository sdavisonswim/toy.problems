// Highest Frequency
// Given a string of only lowercase alphabet characters, find the character that occurs the highest number of times. 
//If any characters tie, return them all in alphabetical order.



function highestFreq (str) {
  var storage = {};
  var freqStr = [];
    for(var i = 0; i < str.length; i++){
    	if(str[i].indexOf !== -1){
    			storage[str[i]] = 0;
    	}
    }
    for(var j = 0; j < str.length; j++){
    	if(storage.hasOwnProperty(str[j])){
    		storage[str[j]] += 1;
    	}
    }
  var arr = Object.keys(storage).map(function (key) { return storage[key]; });
  var max = Math.max.apply( null, arr );
  
  for(let key in storage){
    if(storage[key] === max){
      freqStr.push(key);
    }
  }
  return freqStr.sort().join('');
}