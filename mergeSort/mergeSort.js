// Implement a function that sorts an array of numbers using 
//the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. It begins 
//by treating the input list of length N as a set of N 
//“sublists” of length 1, which are considered to be 
//sorted. Adjacent sublists are then “merged” into sorted 
//sublists of length 2, which are merged into sorted sublists 
//of length 4, and so on, until only a single sorted list 
//remains. (Note, if N is odd, an extra sublist of length 1 
//will be left after the first merge, and so on.)

// This can be implemented using either a recursive 
//(“top-down”) or an iterative (“bottom-up”) approach.

function mergeSort(arr){
  //split the array
  var index = Math.floor(arr.length / 2);
  var left = arr.slice(0, index);
  var right = arr.slice(index, arr.length);
  //return if 0, 1 value we don't need to sort
  if(arr.length <= 1){
    return arr;
  }
  //sort each sublist recursively
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var result = [];
  //if both sides have values, put the lesser value into results
  //and remove it from the other array
  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    }
    else{
      result.push(right.shift());
    }
  }
  //this will clean up remaining values in left array
  while(left.length){
    result.push(left.shift());
  }
  //and remaining values in right array
  while(right.length){
    result.push(right.shift());
  }

  return result;
}