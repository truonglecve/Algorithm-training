let nums = Array;
let check = Number;
let checkIndex = function(nums,check) {
    console.log(nums.length);
    for(let i=0; i<nums.length; i++) {
        if (nums[i] == check) {
            return i;
        }
    }

}