const prompt = require('prompt-sync')({ sigint: true });

let arr = [];

let size =  parseInt(prompt(),10);

for (let i = 0; i < size; i++) {
    arr[i] = parseInt(prompt(),10);
}
arr.sort(function (a, b) { return (a - b) });
let target = parseInt(prompt(),10);

let ans=[];

let mp=new Map();



for(let i=0;i<size;i++){
        let p=target-arr[i];
        if(mp.get(p)){ 
               let s=[];
               s.push(p);
               s.push(target-p);
               ans.push(s);
               break;
        }   
        else{
                mp.set(arr[i],target-arr[i]);
        }

}

console.log(ans);

