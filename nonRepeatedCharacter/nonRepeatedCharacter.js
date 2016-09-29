// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
var result = "sorry";
var storage = {};
  for(var i = 0; i < string.length; i++){
  	storage[string[i]] = 0;
  }
  for(var j = 0; j < string.length; j++){
  	if(storage.hasOwnProperty(string[j])){
  		storage[string[j]] += 1
  	}
  }
  for(var key in storage){
  	if(storage[key] === 1){
  		return key;
  	}
  }
  return result;
}