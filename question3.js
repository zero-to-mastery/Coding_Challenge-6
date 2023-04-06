const prompt = require('prompt-sync')({ sigint: true });

var value = prompt();

function isValidHex(str){
    if (str[0] != '#')
        return false;
 
    if (!(str.length() == 4 || str.length() == 7))
        return false;
 
    for (let i = 1; i < str.length(); i++)
        if (!((str[i] >= '0' && str[i] <= 9)
              || (str[i] >= 'a' && str[i] <= 'f')
              || (str[i] >= 'A' || str[i] <= 'F')))
            return false;
 
    return true;
}


if(isValidHex(value)){
    let s=value.match(/.{1,2}/g)

    var aRgb=[
        parseInt(s[0],16),
        parseInt(s[1],16),
        parseInt(s[2],16)
    ]
    console.log(aRgb);
}
else{

    function valueTohex(c){
        var hex=c.toString(16);
        return hex
    }
    function rgbToHex(r,g,b){
        return(valueTohex(r) +valueTohex(g) +valueTohex(b))
    }
    
    console.log(rgbToHex(12,51,255));

}









