function isRotation(s, s1) {
    if (!s || !s1) {
        return false;
    }
    if (s.length === s1.length) {
        let s3 = s + s;
        return s3.includes(s1);
    } else {
        return false;
    }
}

let s = "hello";
let s1 = "holla";
console.log(isRotation(s, s1));
