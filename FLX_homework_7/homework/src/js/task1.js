'use strict'
let userLogin = prompt('Please enter your login' , '');
let userPass = 'UserPass';
let adminPass = 'RootPass';
let thisTime = new Date();
let currentHours = thisTime.getHours();
 if (userLogin === null || userLogin === ''){
  alert('Canceled');
 } else if ( userLogin.length < 4){
  alert('I dont know any users having name length less than 4 symbols');
 } else if (userLogin === 'User' || userLogin === 'Admin' ){   
  var passWord = prompt('Enter your password', '');
   if( passWord !== adminPass && passWord !== userPass) {
   alert('Wrong password');
     }
 } else {
  alert('I don’t know you');
 } if ( passWord === null || passWord === ''){
	alert('Canceled')
} else if (passWord === userPass ){
	if(currentHours < 20){
		alert('Good day, dear User!');
	}else {
		alert('Good evening, dear User!');
	} 
} else if (passWord === adminPass){
     if(currentHours < 20){
		alert('Good day, dear Admin!');
	}else {
		alert('Good evening, dear Admin!');
		}
}
   