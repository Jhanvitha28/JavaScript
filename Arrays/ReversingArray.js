function reverseArray(arr) {
    let n = arr.length;
    let temp = new Array(n);
    let j = 0;
    for (let i = n - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }
    for (let k = 0; k < n; k++) {
        process.stdout.write(temp[k] + " ");
    }
}

let arr = [3, 5, 6, 4, 7];
reverseArray(arr);
