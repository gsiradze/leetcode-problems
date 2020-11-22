//https://leetcode.com/explore/featured/card/fun-with-arrays/526/deleting-items-from-an-array/3247/
var removeElement = function(nums, val) {
    for(let i=0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));