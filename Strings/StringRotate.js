function wordReverse(s) {
    if (!s || s.trim().length === 0) {
        console.log("String empty");
        return [];
    }
    let s1 = s.split(/\s+/);
    for (let i = 0; i < s1.length; i++) {
        s1[i] = s1[i].split('').reverse().join('');
        console.log(s1[i]);
    }
    console.log(s1.join(' '));
    return s1;
}

let s = "Java J2EE Reverse Me";
wordReverse(s);
