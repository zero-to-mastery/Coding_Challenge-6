//3

const convertcolor = (str) => {
    //rgb value to hex value
    const hextorgb = (hex) => {
        val = hex.slice(1);

        r = parseInt((val.substr(0, 2)), 16);
        g = parseInt(val.substr(2, 2), 16);
        b = parseInt(val.substr(4, 2), 16);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    //converts hex value to Rgb
    const componentToHex = (val) => {
        a = val.toString(16)
        return a.length === 1 ? `0${a}` : a;
    }
    let rgbtohex = (rgb) => {

        hex = rgb.replace("rgb(", "").replace(")", "").split(",");
        return "#" + componentToHex(+hex[0]) + componentToHex(+hex[1]) + componentToHex(+hex[2]);
    }


    if (str.includes("rgb")) {
        return rgbtohex(str);
    } else if (str.includes("#")) {
        return hextorgb(str)
    } else {
        alert(`enter correct number`);
    }

}