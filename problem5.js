/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const isPrime = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

const factorise = (num, factors = []) => {
    let remainder = num;

    for (let i = 2; i <= num; i += 1) {
        if (remainder === 1) {
            return factors;
        }

        if (isPrime(remainder)) {
            factors.push(remainder);
            return factors;
        }

        if (num % i === 0 && isPrime(i)) {
            factors.push(i);
            remainder /= i;
            return factorise(remainder, factors);
        }
    }

    return factors;
};

const factors = [];

for (let i = 2; i <= 20; i += 1) {
    factors.push(factorise(i));
}

// remove duplicates
const uniqueFactors = [...new Set(factors.flat())]; // flattens the factors, converts to a Set which removes duplicates, and converts back to an array
const product = uniqueFactors.reduce((sum, num) => sum *= num, 1);

const failed = [];

// check
for (let i = 2; i <= 20; i += 1) {
    if (232792560 % i !== 0) {
        failed.push(i);
    }
}
console.log(failed);
