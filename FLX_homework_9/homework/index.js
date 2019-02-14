'use strict';
const peopleArr = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ]

/* Task 1*/

function dataType(type) {
    let arr = [];
    type = typeof(type);
    for (let i = 1; i < arguments.length; i++) {
     type = typeof(arguments[i]); 
     arr.push(type);
    }
    return arr;
  }
  console.log(dataType('ffff',2, true ,null, 'fffffff'));

/* Task 2*/

function forEach(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
  }
   forEach([1,2,3],function(func) {
         console.log(func)
      });
    
/* Task 3*/

function map(arr, func) {
    return forEach(arr,func);
  }
  console.log(map([2,5,8],func => func + 3));
 
/* Task 4*/

function filter(arr, func) {
    let result = [];
  
    let filtredArr = forEach(arr, func);
  
    for (let i = 0; i < arr.length; i++) {
        if (filtredArr[i] === true) {
            result.push(arr[i]);
        }
    }
    return result;
  }
  filter([2,5,8], function(func) { 
   console.log (func > 3)
});

/* Task 5*/

function getPersonIsAdult(x) {
    let num=18;
    return x.age > num ;
    }
    function getName(person) {
    return person.name;
  }
  let result=filter(peopleArr,getPersonIsAdult);
  console.log(map(result,getName));
  
  /* Task 6*/

function getAdultBananaLover(x){
    let num =18;
    return x.age > num && x.favoriteFruit === 'banana';
  }
  let res=filter(peopleArr,getAdultBananaLover);
  console.log(map(res,getName));
  
/* Task 7*/

const obj ={keyOne: 1, keyTwo: 2, keyThree: 3};
function keys(obj) {
    let result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          result.push(key);
       }
    }
    return result;
}
console.log(keys(obj));

/* Task 8*/

function values(obj) {
    let result = [];
    for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
        }
    }
     return result;
}
console.log(values(obj));

/* Task 9*/

function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug', 'Sep','Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return 'Date: ' + day + ' of ' + months[month] + ', ' + year;
  }
  console.log(showFormattedDate(new Date('2019-02-13T01:10:00')));

/* Task 10*/

function isEvenYear(date){
    let year = date.getFullYear();
     if (year % 2 === 0){
        return true;
      } else{
        return false;
      }
    } 
console.log(isEvenYear( new Date('2019-02-13T01:10:00')));

/* Task 11*/

function isEvenMonth(date){
    let month = date.getMonth();
     if (month % 2 === 0){
        return false;
      } else{
        return true;
      }
} 
console.log(isEvenMonth( new Date('2019-02-13T01:10:00')));