function mergeSort(array) {
    const subarrays = [];
  
    for (let i = 0; i < array.length; i++) {
      subarrays.push([array[i]]);
    }
  
    while (subarrays.length > 1) {
      const leftArr = subarrays.pop();
      const rightArr = subarrays.pop();
  
      const merged = merge(leftArr, rightArr);
      subarrays.push(merged);
    }
  
    return subarrays[0];
  }
  
  function merge(leftArr, rightArr) {
    const res = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) res.push(leftArr.shift());
      else res.push(rightArr.shift());
    }
    return [...res, ...leftArr, ...rightArr];
  }


var arr = [ 10, 9, 11, 3, 4, 5 ];
    var n = arr.length;
 
    console.log(  "Given array is: ");
    console.log(arr);
 
    let sortedArr = mergeSort(arr);
 
    console.log( "Sorted array for above given array is:: ");
    console.log(sortedArr);