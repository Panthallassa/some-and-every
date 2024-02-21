const numbers = [1,4,7,5,898];
const noOddNumber = [24,56,48,90,2];
const odds = [1,75,97,33,13];
const duplicates = [2,4,5,2,5]
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
}

function hasZero(n) {
    const digits = Array.from(String(n), Number);
    return digits.some(digit => digit === 0);
}

function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
}

function hasNoDuplicates(arr) {
    return arr.every((value, index) => arr.indexOf(value) === index);
}

function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
}

function hasCertainValue(arr, value) {
    return arr.every(key => key.hasOwnProperty(value));
}