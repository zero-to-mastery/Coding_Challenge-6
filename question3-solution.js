/*
Question 3: 
Write a function that converts HEX to RGB. 
Then Make that function autodect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. 
Bonus: Release this tool as a npm package.*/

const HEX = 'HEX';
const RGB = 'RGB';

function determineColorType(color) {
  return /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(color) ? HEX : RGB;
}

function stringToHex(component) {
  var hex = component.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function convertHexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        'rgb(',
        parseInt(result[1], 16),
        ',',
        parseInt(result[2], 16),
        ',',
        parseInt(result[3], 16),
        ')',
      ].join('')
    : null;
}

function stringToRGB(stringColor) {
  var matches = /rgb\((\d+),(\d+),(\d+)\)/.exec(stringColor);
  return matches
    ? {
        r: parseInt(matches[1]),
        g: parseInt(matches[2]),
        b: parseInt(matches[3]),
      }
    : null;
}

function convertRgbToHex(input) {
  const rgb = stringToRGB(input);
  return '#' + stringToHex(rgb?.r) + stringToHex(rgb?.g) + stringToHex(rgb?.b);
}

function convertColor(input) {
  const colorType = determineColorType(input);
  switch (colorType) {
    case HEX:
      return convertHexToRgb(input);
    case RGB:
      return convertRgbToHex(input);
    default:
      'error. The requested color type is not supported by this converter.';
      break;
  }
}

console.log('Test data:', '#D46A6A', '#801515', '#D66A6A');
console.log(convertColor('#D46A6A'));
console.log(convertColor('#801515'));
console.log(convertColor('#D66A6A'));
console.log('---------------------------------');
console.log(convertColor(convertColor('#D46A6A')));
console.log(convertColor(convertColor('#801515')));
console.log(convertColor(convertColor('#D66A6A')));

// NPM package link: https://github.com/IlonaZaika/my-color-converter
