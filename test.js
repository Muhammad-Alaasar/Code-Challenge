// /**
//  * Two Sum
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let finalArr = [];
//     let newArr = nums.filter((el, index) => {
//         return nums.some((e, i) => i != index && (e + el) == target) ;
//     });
//     nums.forEach((el, i) => newArr.includes(el) && finalArr.push(i));
//     return finalArr;
// };

// console.log(twoSum([3, 3], 6))
// console.log(twoSum([2,5,5,11], 10))

// /**
//  * Remove Duplicates from Sorted Array
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let swapIdx = 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[swapIdx] = nums[i + 1];
//       swapIdx++;
//     }
//   }
//   return swapIdx;
// };

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1, 1, 2]));

// /**
//  * Longest Common Prefix
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//   let prefix = "";
//   let firstWordLength = [...strs[0]];

//   for (let i = 0; i < firstWordLength.length; i++) {
//     if (strs.every((element) => element[i] == firstWordLength[i])) {
//       prefix += firstWordLength[i];
//     } else break;
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// function kSumSubset(numArray, k) {
//   // write your code here
//   if (!numArray.length || !k) return;
//   let target = numArray.filter(num => numArray.includes(k - num));
//   return target.length > 0;
// }
// function kSumSubset(numArray, k) {
//   // write your code here
//   let target = numArray.reduce((acc, cur, arr, index) => {
//     // return;
//   }, 0);
//   return target == k;
// }




// function kSumSubset(numArray, k) {
//   // write your code here
//   function hasSumtarget(index, sum) {
//     if (sum === k) return true;
//     if (index === numArray.length) return false;

//     if (hasSumtarget(index + 1, sum + numArray[index])) return true;
//     if (hasSumtarget(index + 1, sum)) return true;

//     return false;
//   }
//   return hasSumtarget(0, 0);
// }

// console.log(kSumSubset([7, 3, 2, 5, 8], 14));
// console.log(kSumSubset([2, 4, 6, 8], 11));
// console.log(kSumSubset([7, 5, 3, 1], 4));
// console.log(kSumSubset([14, 8, 12, 9], 21));




function string_builder(expression) {
  // write your code here
// let newArr = []
//   let firstExperssion = expression.indexOf("[");
//   let lastExperssion = expression.lastIndexOf("]");
//   while (firstExperssion > 0 && lastExperssion > 0)
//   newArr.push()

const regex = /(\d+)\[([^\[\]]*)\]/g;
const matches = [];
let match;
while ((match = regex.exec(expression)) !== null) {
    const number = parseInt(match[1], 10);
    const pattern = match[2];
    matches.push({ number, pattern });
}
return matches;
}

console.log(string_builder("3[a]2[bc]"));
//'aaabcbc';

console.log(string_builder('3[a2[c]]'));
//'accaccacc';