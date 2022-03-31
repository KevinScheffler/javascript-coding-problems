// Get Initials

// const getInitials = (firstName, lastName) => {
//   const first = firstName.slice(0, 1);
//   const last = lastName.slice(0, 1);
//   return `${first.toUpperCase()}.${last.toUpperCase()}`;
// }

// const getInitials = (name) => {
//   const names = name.split(' ');
//   const initials = `${names[0][0].toUpperCase()}.${names[1][0].toUpperCase()}`;
//   return initials;
// }

// console.log(getInitials('Aaron Jack'));
// console.log(getInitials('Jan Frey'));
// console.log(getInitials('Harry Potter'));

// function getInitials(name) {
//   // split the input at " " -> ["Aaron", "Jack"]
//   var names = name.split(' ');
//   var initials = `${names[0][0]}.${names[1][0]}`;
//   return initials;
// }


// console.log(getInitials("Aaron Jack"))







// sumOfPositive

// const sumOfPositive = nums => {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 0) {
//       sum += nums[i];
//     }
//   }
//   return sum;
// }




// console.log(sumOfPositive([1,-2,3,4]));
// console.log(sumOfPositive([-2,-5,-10,-1]));
// console.log(sumOfPositive([4,40,-40,-4]));


// multiplyNumbers

// const multiplyNumbers = (num1, num2) => {
//   let multiplied = num1;
//   if (num2 < 1) {
//     return 0; 
//   } else {
//   for (let i = 0; i < num2 - 1; i++) {
//     multiplied += num1;
//   }
// }
//   return multiplied;
// }


// function multiplyNumbers(num1, num2) {
//   var sum = 0;
//   while (num1--) {
//     sum += num2;
//   }
//   return sum;
// }

// console.log(multiplyNumbers(1,0));
// console.log(multiplyNumbers(5,5));
// console.log(multiplyNumbers(100,500));



// repeatString

// const repeatString = (s, n) => {
//   let str = '';
//   for (let i = 0; i < n; i++) {
//     str += s;
//   }
//   return str;
// }

// const repeatString = (s, n) => {
//   var newStr = "";
//   while (n--) {
//     newStr += s;
//   }
//   return newStr;
// }

// console.log(repeatString("Abc", 3));
// console.log(repeatString("B", 5));
// console.log(repeatString("hello", 2));


// isPalindrome

// const isPalindrome = str => {
//   return str === str.split('').reverse().join('');
// }

// function isPalindrome(str) {
//   for (let i = 0; i < str.length; i++) {
//     let rightIndex = str.length - 1 - i;
//     if (str[i] !== str[rightIndex]) {
//       return false;
//     }
//   if (i >= rightIndex) {
//     break;
//   }
// }
// return true;
// }


// function isPalindrome (str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     let rightIndex = str.length - 1 - i;
//     if(str[i] !== str[rightIndex]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("abcd"));
// console.log(isPalindrome("Abcba"));


// countOdd 

// const countOdd = n => {
//   let odd = 0;
//   for (let i = n - 1; i > 0; i--) {
//     if (i % 2 === 1) {
//       odd++;
//     }
//   }
//   return odd;
// }

// const countOdd = n => {
//   let counter = 0;
//   while(n--) {
//     if (n % 2 === 1) {
//       counter++;
//     }
//   }
//   return counter;
// }

function countOdd (n) {
  return Math.floor(n / 2);
}


console.log(countOdd(5));
console.log(countOdd(10));
console.log(countOdd(1));
