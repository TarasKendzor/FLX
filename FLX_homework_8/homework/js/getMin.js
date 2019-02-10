'use strict';
function getMin() {
  let a = arguments[0];
  let b;
	for (var i = 1; i < arguments.length; i++) {
    b = arguments[i];
    if (a > b) {
			a = b;
		}
	}
	return a;
}
console.log(getMin(99,11,-50,-9999));