function merge(arr, s, mid, e){
    let n1 = mid - s + 1;
    let n2 = e - mid;

    let Left = new Array(n1); 
    let Right = new Array(n2);


    for (let i = 0; i < n1; i++)
        Left[i] = arr[s + i];
    for (let j = 0; j < n2; j++)
        Right[j] = arr[mid + 1 + j];

    let i = 0;

    let j = 0;

    let k = s;

    while (i < n1 && j < n2) {
        if (Left[i] <= Right[j]) {
            arr[k] = Left[i];
            i++;
        }
        else {
            arr[k] = Right[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = Left[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = Right[j];
        j++;
        k++;
    }
}

function mergeSort(arr,s, e){
    if(s>=e){
        return;
    }
    let mid =s+ parseInt((e-s)/2);
    mergeSort(arr,s,mid);
    mergeSort(arr,mid+1,e);
    merge(arr,s,mid,e);
}


var arr = [ 13, 10, 12, 4, 5, 6 ];
    var n = arr.length;

    console.log(  "Given array is: ");
    console.log(arr); //[ 13, 10, 12, 4, 5, 6 ]

    mergeSort(arr, 0, n-1);

    console.log( "Sorted array for above given array is::");
    console.log(arr);//[ 4, 5, 6, 10, 12, 13 ]