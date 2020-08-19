function findMinAndRemove(array){
  let currentMin = array[0];
  let minIdx = 0;
  
  array.forEach((number, idx) => {
    if (number < currentMin) {
      currentMin = number;
      minIdx = idx;
    }
  });
  
  array.splice(minIdx, 1);
  return currentMin;
}

function selectionSort(array){
  let currentMin = 
}
