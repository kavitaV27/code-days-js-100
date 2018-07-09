 var numbers4 = [5, 2, 3, 4, 4, 6, 7, 1, 2, 3];

function findFirstDuplicateIndex(arr){
  var found = {};
  
  for (var a = 0, aa = arr.length; a < aa ; a++) {
    if (found[arr[a]])
      return found[arr[a]];
  
    found[numbers4[a]] = a
  }
}

console.log(findFirstDuplicateIndex(numbers4));