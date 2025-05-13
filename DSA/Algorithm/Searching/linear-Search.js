function linearSearch(arr, n, x){
    for(let i = 0; i< n; i++){
        if(arr[i] ==x)
            return i;
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let x = 3;

let result = linearSearch(arr, n, x);
if(result === -1){
    console.log("No Element found");
}
else{
    console.log("Element found at " + result);
}