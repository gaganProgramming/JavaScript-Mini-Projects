function BinarySearch(arr, x){
    let low = 0;
    let high = arr.length-1;
    let mid;
    while(high >= low){
        mid = low + Math.floor((high -low)/2);
        if(arr[mid]== x){
            return mid;
        }
        else if(arr[mid] > x){
            high = mid -1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1
}

arr = [1, 2, 3, 4, 5];
x = 5;
console.log(BinarySearch(arr, x));
