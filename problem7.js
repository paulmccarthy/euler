/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let primes = 1;
let lastPrime = 2;
let counter = 2;

const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

while (primes <= 10001) {
    if (isPrime(counter)) {
        primes += 1;
        lastPrime = counter;
        console.log(primes, counter);
    }

    counter += 1;
}

console.log(lastPrime);
