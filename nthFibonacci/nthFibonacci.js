// nthFibonacci

// Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

// Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.

// Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.

// How many pairs of iguanas will there be after n months?

// For example, the iguana pair size for months zero through five are:

// 0 1 1 2 3 5
// If n were 4, your function should return 3; for 5, it should return 5.


nthFibonacci = function(n) {  
  var a = 0, b = 1, f = 1;
  if(n === 0){
    return 0;
  }
  for(let i = 2; i <= n; i++){
    f = a + b;
    a = b;
    b = f;
  }
  return f;
};
