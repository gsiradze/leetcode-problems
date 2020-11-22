//https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3248/
var removeDuplicates = function(nums) {
    for (let i=1; i<=nums.length; i++) {
        if (nums[i-1] === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([-1,0,0,0,0,3,3]));