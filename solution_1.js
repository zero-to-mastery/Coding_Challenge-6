const arrToSort=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanTheRoom = (arr)=>{
    let sorted = arr.toSorted((a,b)=> a-b);
    for(let i =0 ;i<sorted.length;i++){
        if(typeof(sorted[i])==='string'){
        grupByType(sorted);
        break;
        } else 
        grupIdentical(sorted);
    }
}

const grupIdentical=(arr)=>{
    let grup=[];
    let count=1;
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        if(count>1&& i===0){
            i+=count;
            grup.push([arr.toSpliced(i,arr.length)]);
            i--;
            count = 1;
        } else if(count>1&& i>3){
            i+=count;
            let subArr=arr.toSpliced(i,arr.length).toReversed();
            grup.push([subArr.toSpliced(count,subArr.length)]);
            subArr=[];
            i--;
            count = 1;
        }
        else{
            grup.push(arr[i]);
        }
    }
    console.log(grup);
}

const grupByType = (arr)=>{
    let mainArr=[];
    let stringArr=[];
    let numArr=[];
    for(let i =0 ;i<arr.length;i++){
        if(typeof(arr[i])==='string'){
            stringArr.push(arr[i]);
        }else{
            numArr.push(arr[i]);
        }
    }
    mainArr.push([numArr],[stringArr]);
    console.log(mainArr);
}