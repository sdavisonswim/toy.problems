// Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.


function reverseInteger (n) {
  let rNum = 0;
  while(n !== 0){
    rNum *= 10;
    rNum += n % 10;
    n = Math.floor(n / 10);
  }
  return rNum;
}
