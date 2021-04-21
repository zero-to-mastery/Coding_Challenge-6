// Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, 
// when added together, give the target number. 
// For example: answer([1,2,3], 4)should return [1,3]

function target(arr, target) {
	var temp;
	var subArray;
	var finalArray = [];
	for (var i = 0; i < arr.length; i++) {
		temp = arr[i];
		subArray = [];
		for(var j = i + 1; j < arr.length; j++) {
			temp += arr[j]; 
			temp === target ? subArray.push(arr[i], arr[j]) : temp = arr[i]
		}
		if(subArray.length > 0){
			finalArray.push(subArray);
		}
		
	}
	return finalArray
}