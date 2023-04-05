
//Question 1: Clean the room function: 
//given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

let input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const cleanUp = ((array) => {
  let sortedInput = array.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedInput.length; i++) {
    let j = i + 1;
    while (sortedInput[j] === sortedInput[i]) {
      j++;
    }

    if (j - i > 1) {
      result.push(sortedInput.slice(i, j));
    } else {
      result.push(sortedInput[i]);
    }

    i = j - 1;
  }

  return result;
});

cleanUp(input);


// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together,
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

let numberArray = [1, 2, 3, 4, 5, 6];

let addition = ((array, num) => {
  let target = num;
  let answer = [];

  for (let i = 0; i < array.length; i++) {

    for (let k = i + 1; k < array.length; k++) {

      if (k !== i && array[k] + array[i] === target) {
        answer.push([array[i], array[k]]);

      }
    }
  }

  if (answer.length === 0) {
    console.log("Sorry, can't reach target with those numbers: " + array);
  } else {
    return answer;
  }
});

addition(numberArray, 12);

// Question 3: Write a function that converts HEX to RGB. Then Make that function
// auto-dect the formats so that if you enter HEX color format it returns RGB and
// if you enter RGB color format it returns HEX.

//eg. E06910 => (224, 105, 16)

const convertColor = (color) => {
  if (typeof color === 'string' && color.startsWith('#')) {
    // HEX to RGB conversion
    color = color.replace('#', '');
    if (!/^[0-9A-Fa-f]{6}$/.test(color)) {
      return null;
    }
    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  } else if (typeof color === 'string' && color.startsWith('rgb')) {
    // RGB to HEX conversion
    const rgbMatch = color.match(/\d+/g);
    if (rgbMatch === null || rgbMatch.length !== 3) {
      return null;
    }
    let r = parseInt(rgbMatch[0]);
    let g = parseInt(rgbMatch[1]);
    let b = parseInt(rgbMatch[2]);
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      return null;
    }
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  } else {
    return null;
  }
};
