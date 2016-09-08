// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

function isBalanced (str) {
  var storage = [];
  
  for(var i = 0; i < str.length; i++){
    if(str[i] === '(' || str[i] === '[' || str[i] === '{' ){
      storage.push(str[i]);
    }
    else if(str[i] === ')' || str[i] === ']' || str[i] === '}'){
      if(storage.length === 0 || !isMatch(storage[storage.length - 1], str[i])){
        return false;
      }
      else{
        storage.pop();
      }
    }
  }
  if(storage.length === 0){
    return true;
  }
  else{
    return false;
  }
  
  function isMatch(a, b){
    if(a === '(' && b === ')'){
      return true;
    }
    else if(a === '[' && b === ']'){
      return true;
    }
    else if(a === '{' && b === '}'){
      return true;
    }
    return false;
  }
}