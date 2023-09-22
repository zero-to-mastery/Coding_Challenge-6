 // Exercise 1

function sortNumber (arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b)

    return sortedArray
}

const inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortedArray = sortNumber(inputArray)

console.log(sortedArray)

function organizeArray(arr) {
    const numberArray = [];
    const stringArray = [];
  
    for (const element of arr) {
      if (typeof element === 'number') {
        numberArray.push(element);
      } else if (typeof element === 'string') {
        stringArray.push(element);
      }
    }
  
    return [numberArray, stringArray];
  }
  
  const mixedArray = [1, "2", "3", 2];
  const [numbers, strings] = organizeArray(mixedArray);
  
  console.log(numbers); // [1, 2]
  console.log(strings); // ["2", "3"]
  

   // Exercise 2

  function findTwoNumbers(arr, target) {
    const numMap = new Map();
  
    for (const num of arr) {
      const complement = target - num;
  
      if (numMap.has(complement)) {
        return [complement, num];
      }
  
      numMap.set(num, true);
    }
  
    return null; // Return null if no such pair is found
  }
  
  const result = findTwoNumbers([1, 2, 3], 4);
  console.log(result); // Output: [1, 3]


  // Exercise 3 


  const convert = require('color-convert');

function hexToRgb(hex) {
  const rgbArray = convert.hex.rgb(hex);
  return `rgb(${rgbArray.join(', ')})`;
}

function rgbToHex(rgb) {
  const hexString = convert.rgb.hex(rgb);
  return `#${hexString}`;
}

function convertColor(input) {
  if (input.startsWith('#')) {
    return hexToRgb(input);
  } else if (input.startsWith('rgb(')) {
    const rgbValues = input.match(/\d+/g).map(Number);
    return rgbToHex(rgbValues);
  } else {
    return 'Invalid input';
  }
}

module.exports = convertColor;
