'use strict';
const price = Number(prompt('Please enter price'));
const discount = Number(prompt('Your discount'));
var discountCalc = price * (discount/100);
var priceWithD = price - discountCalc;
var savedMoney = price - priceWithD;
let priseFloor = Math.floor(priceWithD * 100) / 100 ;
let discountFloor = Math.floor(savedMoney * 100) / 100 ;
 if (price < 0 || price > 9999999 && discount < 0 || discount > 99) {
 alert('’Invalid data’');
} else {
 alert('Price without discount:'+ price + '\nDiscount:' + discount + '\nPrice with discount:' + 
 priseFloor + '\nSaved:' + discountFloor);
}
