/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

let sum = 0;

for (let i = 2; i < 2E6; i += 1) {
    if (isPrime(i)) {
        sum += i;
    }
}

console.log(sum);
