// Assignment 4: Loop Control Structures

console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n-- First number > 10 divisible by 6 --");

let number = 11;

while (number <= 100) {
    if (number > 10 && number % 6 === 0) {
        console.log(`Found: ${number}`);
        break;
    }
    number++;
}

console.log("\n-- do...while with continue --");

let current = 0;

do {
    current++;

    if (current % 2 === 0) {
        continue;
    }

    console.log(`Odd number: ${current}`);
} while (current < 5);
