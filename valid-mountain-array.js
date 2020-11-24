//https://leetcode.com/problems/valid-mountain-array/
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    let highestIndex = 0;
    for(let i=0; i<arr.length; i++){
        if (arr[i] > arr[highestIndex]) {
            highestIndex = i;
        }
    }

    return checkIfHighest(highestIndex, arr);

};

var checkIfHighest = function(highestIndex, arr) {
    if (highestIndex === 0 || highestIndex === arr.length - 1) {
        return false;
    }

    for(let i=0; i<highestIndex; i++) {
        if (arr[highestIndex] < arr[i] || arr[i] <= arr[i-1]) {
            return false;
        }
    }
    for(let i=highestIndex+1; i<arr.length; i++) {
        if ((arr[i] >= arr[highestIndex] && !(i !== highestIndex && arr[i] !== arr[arr.length - 1])) || arr[i] >= arr[i-1]) {
            return false;
        }
    }
    return true;
}

console.log(validMountainArray([2,1])); // false
console.log(validMountainArray([3,5,5])); // false
console.log(validMountainArray([0,3,2,1])); // true
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9])); // false
console.log(validMountainArray([1,3,2])); // true
console.log(validMountainArray([1,7,9,5,4,1,2])); // false
console.log(validMountainArray([3,6,5,6,7,6,5,3,0])); // false
console.log(validMountainArray([1,1,1,1,1,1,1,2,1])); // false