'use strict';
// function isSmaller(a, b){
// 	return a < b;
// }
// console.log(isSmaller(5,-1));
// console.log(isSmaller(-5,-1));

function isBigger(a, b){
	return a > b;
}
function isSmaller(a, b){
	return !isBigger(a,b);
}
console.log(isSmaller(5,-1));
console.log(isSmaller(-5,-1));