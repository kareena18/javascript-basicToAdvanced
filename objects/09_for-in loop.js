//for in loop (each iteration return a key of objects)

let car ={
  model:2022,
  color:"black",
  compant:"toyota"
}
console.log(car);

let x="";
for(let key in car){
  console.log(car[key]);
  x+=car[key];
}
console.log(x);
