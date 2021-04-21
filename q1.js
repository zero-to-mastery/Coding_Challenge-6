// given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered.
//  For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//  Bonus: Make it so it organizes strings differently from number types. 
//  i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

function groupNum(array) {
	var sortArray = array.sort((a, b) => a - b)
	var grouped = sortArray.reduce((total,value,i,arr) => {
		if (value === arr[i-1]) {
			total[total.length - 1].push(value)
		}else{
			total.push(value === arr[i+1] ? [value] : value)
		}
		return total
	},[])
	console.log(grouped);
}

function groupType(array) {
	//[1, "2", "3", 2]
	// typeof(a[0]) === typeof(a[3])  true
	var grouped = array.reduce((total,value,i,arr) => {
		if(typeof(value) === typeof(arr[i-1])){
			total[total.length - 1].push(value) 
		}else {
			total.push(typeof(value) === typeof(arr[i+1]) ? [value] : [value])
		}
		return total
	},[])
	console.log(grouped);
}
