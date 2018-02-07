# utility-pro
NPM package which provides some utility functions to make your coding easy :)

command to Install :
```js
npm install utility-pro --save
```
list of functions contain in this package :

* __`sum()`__ :  To calculate sum of all the numbers in array
* __`sortNumber()`__ : To sort array of number
* __`removeDup()`__ :  To remove duplicate elements from array
* __`removeDupAndSort()`__ : To remove duplicate elements from array of number and sort it
* __`isEven()`__ :  To check if every element of array is even number or not
* __`isPrime()`__ :  To check if given number is prime or not
* __`isNull()`__ :  To check if given variable is null or not
* __`isUndefined()`__ :  To check if given variable is undefined or not
* __`createRandomEmail()`__ It will create a random email for you
* __`createRandomWord()`__ It will create a random word of desire number of alphabet for you
* __`createRandomPhoneNumber()`__ It will create a random phone number for you
* __`createRandomURL()`__ It will create a random url of desire length for you
* __`createRandomIP()`__ It will create a random IPv4 for you

Example:
```js
const utilPro = require('utility-pro');
const a;
const arr = [3,2,4,4,2,1,7,5,9,4];
console.log(utilPro.sum(arr)); // 41
console.log(utilPro.sortNumber(arr)); // [ 1, 2, 2, 3, 4, 4, 4, 5, 7, 9 ]
console.log(utilPro.removeDup(arr)); // [ 3, 2, 4, 1, 7, 5, 9 ]
console.log(utilPro.removeDupAndSort(arr)); // [ 1, 2, 3, 4, 5, 7, 9 ]
console.log(utilPro.isEven([2,3,4,5])); //false
console.log(utilPro.isEven([2,6,4,8])); //true
console.log(utilPro.isPrime(5)); // true
console.log(utilPro.isPrime(4)); // false
console.log(utilPro.isNull(a)); // false
console.log(utilPro.isUndefined(a));// true
console.log(utilPro.createRandomEmail());// utilitypro1518028437757@npm.com
console.log(utilPro.createRandomWord(5));// efedb
console.log(utilPro.createRandomPhoneNumber());// 8995359431
console.log(utilPro.createRandomURL(5));// www.sdasd.com
console.log(utilPro.createRandomIP());// 192.168.1.50

```
more functions will be added in future.. stay tuned.. :)

