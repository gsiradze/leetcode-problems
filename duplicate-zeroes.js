//https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
var duplicateZeros = function(arr) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
            arr.pop();
        }
    }
};

duplicateZeros([1,0,2,3,0,4,5,0]);