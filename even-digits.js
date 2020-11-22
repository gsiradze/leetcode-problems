//https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3237/
var findNumbers = function(nums) {
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        let contains = 0;
        while (nums[i]) {
            contains++;
            nums[i] = parseInt(nums[i] / 10);
        }
        if (contains%2 === 0) count++;
    }
    return count;
};

console.log(findNumbers([555,901,482,1771]));
console.log(findNumbers([12,345,2,6,7896]));
console.log(findNumbers([100000]));