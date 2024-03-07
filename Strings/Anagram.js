function findAnagram(s, s1) {
    if (!s || !s1) {
        return false;
    }
    s = s.replace(/\s/g, '').toLowerCase();
    s1 = s1.replace(/\s/g, '').toLowerCase();
    if (s.length !== s1.length) {
        return false;
    } else {
        let c1 = s.split('');
        let c2 = s1.split('');
        c1.sort();
        c2.sort();
        return c1.join('') === c2.join('');
    }
}

let s = "The Morse Code";
let s1 = "Here come dots";
console.log(findAnagram(s, s1));
