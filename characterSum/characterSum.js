// Character Sum
// Given a string of arbitrary size, convert each character into its integer equivalent and sum the entirety.


function charSum (str) {
  let total = 0;
  //loop through string
  for(let i = 0; i < str.length; i++){
    //convert index from string to number
    let num = parseInt(str[i]);
    //if index is a number (Number.isInteger())
    if(Number.isInteger(num)){
      //add to total
      total += num
    }
  }
  return total;
}