// Tallest

function maxInArray(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265, 364];
const tallest = maxInArray(heights);
console.log('tallest person is: ', tallest);