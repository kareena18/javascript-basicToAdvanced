//setTimeout and setInterval

//setTimeout - run function "once" after "interval" of time

//setInterval - run function repeatedly starting after the interval of time,then repeating....

//setTimeout(function/code,delay,arg1,arg2,....)

setTimeout(function greeting(name,name2){
  console.log(`welcome coders ${name} and ${name2}`)
},1000,"neha","rahul");

//setInterval(function/code,delay,arg1,arg2,....)

setInterval(function greeting(name,name2){
  console.log(`welcome coders ${name} and ${name2}`)
},1000,"kareena","gourav");
