const rgb2hex=(array)=> {
	var result = "";
	array.map(component => {
		//changes rgb to hex component
		var rgb = Number(component).toString(16);
		//adds padding to components with length 1
		rgb = rgb.length == 1 ? "0" + rgb : rgb;
		result += rgb;		
	})
	return '#' + result
}

function hex2rgb(value) {
	//finds red, green and blue components and writes them to array
	var result = [value.slice(0,2), value.slice(2,4), value.slice(4)];
	//changes hex to rgb
	result = result.map(component => parseInt(component, 16))
	return 'RGB ' + result.toString();
}

//function that recognises hex and rgb format
const convertHexRgb = (value)=> {
	if (value.includes(",")) {
		var array = value.split(",");
		return rgb2hex(array);

	} else {
		return hex2rgb(value);

	}
}

convertHexRgb('FF0000');