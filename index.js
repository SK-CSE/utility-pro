// function to check if object is indefined or not
const isUndefined = function (obj) {
    return obj === void 0;
};

// function to check if object is null or not
const isNull = function (obj) {
    return obj === null;
};

// compare function for sorting number in array
const sortNumber = arr => {
    arr.sort((a, b) => a - b);
    return arr;
};

// check if all numbers in array is even or not
const isEven = arr => arr.every(num => num % 2 === 0);

// remove duplicate elements from array
const removeDup = arr => arr.filter((item, index, self) => self.indexOf(item) === index);

// remove duplicate from array and sort elements
const removeDupAndSort = arr => sortNumber(arr.filter((item, index, self) => self.indexOf(item) === index));

// sum of all elements in array
const sum = arr => arr.reduce((a, b) => a + b, 0);

// function to check if a number is prime or not
const isPrime = num => {
    if (num === 1 || num > 2 && num % 2 === 0) return false;
    for (let i = 3; i <= Math.floor(Math.sqrt(num)); i = +2) {
        if (num % i === 0) return false;
    }
    return true;
};

module.export = {
    isUndefined: isUndefined,
    isNull: isNull,
    sortNumber: sortNumber,
    isEven: isEven,
    removeDup: removeDup,
    removeDupAndSort: removeDupAndSort,
    sum: sum,
    isPrime: isPrime
};