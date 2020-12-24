/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

const NUM = 600851475143;
const primeFactors = [];

const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

const checkFactors = (arr) => arr.reduce((acc, factor) => acc *= factor, 1);

for (let i = 2; i < NUM / 2; i += 1) {
    console.log('checking', i, primeFactors);
    if (NUM % i === 0 && isPrime(i)) {
        primeFactors.push(i);
    }

    // every number has a unique set of prime factors, if we have all the factors, we're done.
    if (checkFactors(primeFactors) === NUM) {
        break;
    }
}

console.log(primeFactors.sort((a, b) => b - a)[0]);
