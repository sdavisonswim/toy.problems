// Flatten

// Given an array of arrays, return all elements in a single array. You must use recursion.

function flatten (arrays) {
  let storage = [];
  function flat (array){
    for(let i = 0; i < array.length; i++){
      if(Array.isArray(array[i])){
        flat(array[i]);
      }
      else{
        storage.push(array[i]);
      }
    }
  }
  flat(arrays);
  return storage;
}