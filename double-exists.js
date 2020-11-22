//https://leetcode.com/explore/featured/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/
var checkIfExist = function(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if (arr[i] === arr[j]*2 && i !== j) {
                return true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([10,2,5,3]));
console.log(checkIfExist([7,1,14,11]));
console.log(checkIfExist([3,1,7,11]));
console.log(checkIfExist([-2,0,10,-19,4,6,-8]));