function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (key === arr[i]) {
            console.log(i);
            return;
        }
    }
    console.log("not found");
}

let arr = [90, 89, 56, 25, 27, 1];
linearSearch(arr, 25);
