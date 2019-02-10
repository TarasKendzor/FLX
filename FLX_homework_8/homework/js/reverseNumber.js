'use strict';
function reverseNumbers(num){
  if (num > 0){
      let reverse = num.toString().split('').reverse().join('');
      return + reverse;
  } else {
      let sub = Math.abs(num);
      let reverseSub = sub.toString().split('').reverse().join('');
      return - reverseSub;
  } 
}
console.log(reverseNumbers(123));
console.log(reverseNumbers(-456));
console.log(reverseNumbers(10000));