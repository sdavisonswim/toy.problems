// Balanced Parenthesis
// Given a string, return true if it contains balanced parenthesis ().

//psuedo code white board off initial problem
//for loop through string
  //check each index
    //if "(" push to array storage
    //if ")" pop off of array storage
//if array storage is empty then return true
//else return false



function isBalanced (string) {
  let storageArray = [];
  for(let i = 0; i < string.length; i++){
    if(string[i] === "("){
      storageArray.push(string[i]);
    }
    else if(string[i] === ")"){
      var temp = storageArray.pop();
      if(temp === undefined){
        return false;
      }
    }
  }
  if(storageArray.length === 0){
    return true;
  }
  else {
    return false;
  }
}