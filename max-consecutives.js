//https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let tempMax = 0;
    for (let i=0; i < nums.length; i++) {
        nums[i] === 0 ? tempMax = 0 : tempMax++;
        if (max < tempMax) {
            max = tempMax;
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,1,1, 0,1]));
console.log(findMaxConsecutiveOnes([1]));
