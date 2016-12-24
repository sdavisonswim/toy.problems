// Largest Product of Three
// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

function largestProductOfThree (array) {
  //sort array numerically
  function sortNumber(a,b) {
    return a - b;
  }

  let sorted = array.sort(sortNumber);
  
  let neg = sorted[0] * sorted[1] * sorted[sorted.length-1];
  let pos = sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3]

  if(neg > pos){
    return neg;
  }
  else{
    return pos;
  }
}