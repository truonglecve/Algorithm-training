let nums = Array;
let target = Number;
let twoSum = function (nums, target) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                output.push(i);
                output.push(j);
            } 
    }
    return output;
}
}