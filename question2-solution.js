/*Question 2: 
Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, 
give the target number. For example: answer([1,2,3], 4)should return [1,3]
 */

const inputArray = [1, 2, 1, 1, 1, 1, 13];
const targetNumber = 14;

function findPairs(input, target) {
  for (const element of input) {
    const pair = input.find((item) => item + element === target);
    if (pair) {
      return [element, pair];
    }
  }

  return 'error. there is no pairs with given target value.';
}

findPairs(inputArray, targetNumber);
