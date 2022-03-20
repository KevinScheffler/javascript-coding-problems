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

const sumOfPositive = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i];
    }
  }
  return sum;
}




console.log(sumOfPositive([1,-2,3,4]));
console.log(sumOfPositive([-2,-5,-10,-1]));
console.log(sumOfPositive([4,40,-40,-4]));