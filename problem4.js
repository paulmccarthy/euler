/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const palindromes = [];

// two 3 digit numbers will always produce a 6 digit number: 100 * 100 = 10000, 999 * 999 = 998001
const isPalindrome = (num) => {
    const s = [...String(num)];
    return s[0] === s[5] && s[1] === s[4] && s[2] === s[3];
};

for (let i = 100; i <= 999; i += 1) {
    for (let j = 100; j <= 999; j += 1) {
        if (isPalindrome(i * j)) {
            palindromes.push(i * j);
        }
    }
}

console.log(palindromes.sort((a, b) => b - a)[0]);
