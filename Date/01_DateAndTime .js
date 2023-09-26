//date and time
//date object always carry both date and time

//using date method
let curDate = new Date(2000,02,09,11,54,23);//year 0 to 11(month) date hour minute seconds
console.log(curDate);

//using timeStamp (integer number represent in "ms" from 1-1-1970)
let curr = new Date(86400000);//0 is time in ms
//1 day= 24*60*60=86400000ms
console.log(curr);

//to get time in "ms"
let curr1=new Date().getTime();
console.log(curr1);
//1695709136521 = total time in ms
