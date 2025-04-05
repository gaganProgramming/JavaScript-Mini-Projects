// Use a Hash Map to track occurrences O(n) time
function rotate(nums, k){
    k = k % nums.length;
    nums.reverse();
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1)
}

function reverse(arr, start, end){
    while(start < end)[
        [arr[start], arr[end]] = [arr[end]], arr[start]];
        start++;
        end --;
}
let arr = [1, 2, 3, 4, 5, 6, 7];
rotate(arr, 3);
console.log(arr)