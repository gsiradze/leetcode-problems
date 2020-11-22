//https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3253/
var merge = function(nums1, m, nums2, n) {
    for (let j=0; j<n; j++) {
        nums1[j + m] = nums2[j];
    }
    return nums1.sort((a,b) => a - b);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));