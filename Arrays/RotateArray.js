function rotateArray(arr, x) {
    for (let i = 0; i < x; i++) {
        let first = arr[0];
        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }
        arr[arr.length - 1] = first;
    }
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr[i] + " ");
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = 2;
rotateArray(arr, x);
