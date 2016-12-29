// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

function rockPaperPermutation (roundCount) {
  //storage for permutations
  let storage = [];
  //possible choices per round
  let choices = ['r', 'p', 's'];
  
  if(roundCount){
    //recursive helper function to build permutations
    var helperfunc = function(combination){
      //base case
      if(combination.length === roundCount){
        storage.push(combination);
        return
      }
      //recursion, building permutations
      for(let i = 0; i < choices.length; i++){
        helperfunc(combination + choices[i]);
      }
    }
    //invoke helper function with empty string
    helperfunc('');
  }
  return storage;
}