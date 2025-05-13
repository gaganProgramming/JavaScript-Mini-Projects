function bubbleSort(arr){
    const n = arr.length;
    for(let i = 0; i< n; i++){
        for(j= 0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 3, 2, 3, 5]));