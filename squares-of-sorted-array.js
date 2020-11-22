//https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3240/
var sortedSquares = function(A) {
    const arr = [];
    for (let i=0; i<A.length; i++) {
        arr.push(A[i] * A[i]);
    }
    return arr.sort((a,b) => a - b);
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-7,-3,2,3,11]));