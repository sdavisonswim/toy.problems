// Climbing Stairs
// You are climbing a stair case. It takes n steps to reach to the top. Your solution will need to be optimized to run in O(n) time complexity.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


function climbStairs (n) {
  //will use fibonacci sequence to solve
  //equation: stairs[n] = stairs[n-1]+stairs[n-2]
  //set base case
  if(n <= 1){
    return n;
  }
  let stairs = [1, 1]
  //starting point for x
  let x = 2;
  //rename to x to build sequence based off n
  //build sequence with loop
  while(x <= n){
    stairs[x] = stairs[x-1]+stairs[x-2]
    x++;
  }
  //return nth value (# of ways to climb stairs)
  return stairs[n];
}