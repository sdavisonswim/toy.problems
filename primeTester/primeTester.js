// A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness!

function primeTester (n) {
  if(n <  2){
    return false
  }
  else if(n >= 2){
    for(var i = 2; i <= Math.floor(Math.sqrt(n)); i++){
      if(n % i === 0){
        return false;
      }
    }
    return true;
  }
}