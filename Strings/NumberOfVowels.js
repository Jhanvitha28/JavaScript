function vowelCount(s) {
    if (!s) {
        return 0;
    }
    s = s.toLowerCase();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
            count++;
        }
    }
    return count;
}

let s = "jhanvitha";
let cnt = vowelCount(s);
console.log(cnt);
