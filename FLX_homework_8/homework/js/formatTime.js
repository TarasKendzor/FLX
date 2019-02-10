'use strict';
function formatTime(n) {
  let hour = Math.floor((Math.trunc(n) % 1440 ) / 60);
  let min = (( n % 1440) % 60);
  let day = Math.floor(Math.trunc(n) / 1440);
     if(n < 60){
        return console.log(day +' day(s) '+ hour + ' hour(s) '+ min + ' minute(s)')
     }else if( n < 1440){
       return console.log(day +' day(s) '+ hour + ' hour(s) ' + min + ' minute()')
     }else if( n >= 1440){
       console.log(day +' day(s) '+ hour + ' hour(s) ' +min +' minute()')
     }
 }
 console.log(formatTime(1441));
