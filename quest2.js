function answer(arr, num) {
    arr.sort((a,b) => a-b);
    if (num < arr[0]) return 'Numbers in the array are too big to return the sum you\'re asking for';
    let set = [...new Set(arr)];
    let i =0;
    let j=i+1;
    
    while (j<set.length) {
        let sum = set[i]+set[j];
        if (sum < num && j-i===1) j++;
        else if (sum < num && j-i>1) i++;
        else if (sum > num) return 'sorry cant help you';
        else if (sum === num) return [set[i], set[j]];
    }
    return 'Numbers in the array are too small to return the sum you\'re asking for!'
}