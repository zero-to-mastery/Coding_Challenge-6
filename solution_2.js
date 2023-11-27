const toSume = (nums,target)=>{
    let sum=0;
    let newArray=[];
    for(let i=0;i<nums.length;i++)
    for(let j=1;j<nums.length;j++){
        sum=nums[i]+nums[j];
        if(sum==target && i!=j){
        return newArray=[i,j];
        }
    }
}