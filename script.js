// 1. Create a function that will find the factorial number of [9] using recursion.

function factorial(number) {
    let factNumber = 1;
    for (let i = 1; i <= number; i++) {
        factNumber = factNumber * i;
    }
    return factNumber;
}
let getFactorial = factorial(9);
console.log('Factorial of 9 is', getFactorial);







// 2. Find the maximum number in a jagged array given below array of numbers?


var arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var total = 0;
var average = 0.0;
for (var jagged = 0; jagged < arr.length; jagged++) {
    for (var i = 0; i < arr[jagged].length; i++) {
        total += arr[jagged][i];
    }
    average = total / arr[jagged].length;
    console.log(`Jagged array ${parseInt(jagged + 1)} given  ${average.toFixed(2)}`);
    total = 0;
    average = 0.0;
}





// 3. Find the counts of duplicates in an array?
const array = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

const counts = {};
array.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
});
console.log(counts)





// 4. How to find unique values from an array in sorted order?
function sortUnique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) { return a * 1 - b * 1; });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
var arrayUniqueNumber = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
var uniqueNumber = sortUnique(arrayUniqueNumber);
console.log(uniqueNumber);
