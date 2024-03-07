function zeroAtEnd(arr) {
    let n = arr.length;
    let temp = new Array(n).fill(0);
    let count = 0;
    let j = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            temp[j] = arr[i];
            j++;
        } else {
            count++;
        }
    }

    while (count !== 0) {
        temp[j] = 0;
        j++;
        count--;
    }

    for (let i = 0; i < n; i++) {
        process.stdout.write(temp[i] + " ");
    }
    return temp;
}

let arr = [1, 2, 0, 3, 0, 4, 0, 0, 9, 6];
zeroAtEnd(arr);
