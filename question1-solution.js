/* Question 1: 
Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

const input = [
  4,
  1,
  2,
  4,
  591,
  392,
  391,
  '2',
  5,
  10,
  '23',
  '1',
  '1',
  '4',
  '4',
  '4',
  2,
  1,
  1,
  1,
  4,
  20,
  20,
];

function getArrayByType(inputArray, type) {
  return inputArray.filter((item) => typeof item === type);
}

function getMap(array) {
  const itemsMap = new Map();

  array.forEach((item) => {
    const mapItem = itemsMap.get(item);

    if (mapItem) {
      itemsMap.set(item, [...mapItem, item]);
    } else {
      itemsMap.set(item, [item]);
    }
  });

  return itemsMap;
}

function organize(array) {
  const result = [];
  const mappedItems = getMap(array);

  mappedItems.forEach((item) => {
    result.push(item.length === 1 ? item[0] : item);
  });

  return result;
}

function cleanTheRoom(array) {
  const strings = getArrayByType(array, 'string');
  const numbers = getArrayByType(array, 'number');

  const numbersResult = organize(numbers);
  const stringsResult = organize(strings);

  return stringsResult.concat(numbersResult);
}

console.log(cleanTheRoom(input));
