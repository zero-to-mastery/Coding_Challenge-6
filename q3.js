 // Write a function that converts HEX to RGB. 
 // Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and 
 // if you enter RGB color format it returns HEX.



 function colorFormat(input) {

 	var color = input.includes(',') ? rgbToHex(input) : hexToRgb(input);

 	function hexToRgb(input) {
 		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input);
 		return result ? {
 			r: parseInt(result[1], 16),
 			g: parseInt(result[2], 16),
 			b: parseInt(result[3], 16)
 		} : null;
 	}



 	function rgbToHex(input) {
 		var input = input.split(",");
 		var rgbToHex = input.map(color => {
 			var colorInt = parseInt(color);
 			var hex = colorInt.toString(16);
 			return hex.length == 1 ? "0" + hex : hex;

 		})
 		return "#"+rgbToHex.join('');
	}

	return color;
}




