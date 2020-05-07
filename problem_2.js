// 2
arr = [1, 2, 3]
val = 4

function output(arr, val) {
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === val)
                return [arr[i], arr[j]];
        }
    }
}