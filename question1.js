let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20]
let ans = []
let same = []
let cnt=0;
arr.sort(function (a, b) { return (a - b) });

for (var i=0;i<arr.length;i++){
      
    if(same.length===0){same.push(arr[i])}
    else{

        if(same[0]===arr[i]){
            same.push(arr[i]);
        }
        
        else{ 
                let s1=[];
                same.forEach(function(ele){
                    s1.push(ele)
                })
                ans.push(s1)
                same=[];same.push(arr[i]);
                
        }
    }
      
}

same.toString();
ans.push(same)
console.log(ans);




