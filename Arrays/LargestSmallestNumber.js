function findLargestSmallestNumber(arr) {
    let smallNum = arr[0];
    let largeNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largeNum)
            largeNum = arr[i];
        else if (arr[i] < smallNum)
            smallNum = arr[i];
    }
    console.log("Largest Number: " + largeNum);
    console.log("Smallest Number: " + smallNum);
}

let arr = [80, 10, 40, 50, 30, 20];
findLargestSmallestNumber(arr);
