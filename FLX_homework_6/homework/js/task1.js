'use strict';
const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));
const d = b* b - 4 *a *c ;
function quadraticEquation (a ,b ,c){
	if(isNaN(a) || isNaN(b) || isNaN(c)){	
	return '‘Invalid input data’';	
    } else if(d < 0){
	return 'no solution (when Discriminant < 0)';
	} else if (d === 0 ){
		const x = (-b)/(2 * a );
		return 'Your resuls: x= ' + x;
	} else{
		const dSqrt = Math.sqrt(d);
		const x1 = (-b + dSqrt) / (2 * a);
		const x2 = (-b - dSqrt) / (2 * a);
		return 'Your resuls : x1= ' + x1 + ', x2= ' + x2;	
	}
} 
alert(quadraticEquation(a, b, c));