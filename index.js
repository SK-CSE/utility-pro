const letters = "abcdefghijklmnopqrstubwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//helper function
const randomByte = () => {
  return Math.round(Math.random() * 256);
};

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

//create random email
const createRandomEmail = () => 'utilitypro' + Date.now() + "@npm.com";

//create random word of desired length
const createRandomWord = n => {
  var randomWord = "";
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * n + 1);
    randomWord += letters[randomNumber];
  }
  return randomWord;
};

//create random phone number
const createRandomPhoneNumber = () => {
  const numbers = "1234567890";
  const randomNumber = Math.floor(Math.random() * 9 + 1) + Math.random().toString().slice(2, 11);
  return randomNumber;
};

//create random URL
const createRandomURL = n => {
  var randomURL = "www.";
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * n + 1);
    randomURL += letters[randomNumber];
  }
  randomURL += ".com";
  return randomURL;
};

// create random IP Address
const createRandomIP = () => {
  const ip = randomByte() + '.' + randomByte() + '.' + randomByte() + '.' + randomByte();
  return ip;
};

module.exports = {
  isUndefined: isUndefined,
  isNull: isNull,
  sortNumber: sortNumber,
  isEven: isEven,
  removeDup: removeDup,
  removeDupAndSort: removeDupAndSort,
  sum: sum,
  isPrime: isPrime,
  createRandomEmail: createRandomEmail,
  createRandomWord: createRandomWord,
  createRandomPhoneNumber: createRandomPhoneNumber,
  createRandomURL: createRandomURL,
  createRandomIP: createRandomIP
};
