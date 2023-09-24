//introduction to objects in javascript

let car = {
  color:"black",
  model:"2022",
  company:"honda"
}
console.log(car);

//"accessing" the javascript object properties
console.log(car["company"]);
console.log(car.company);

let propertyName = "color";
console.log(car[propertyName]);
console.log(car.propertyName)//it search for propertyName attribute in the car object 
console.log(car.color);//use direct property name

//"modify" the object
car.color = "brown";
car["model"]=2018;
console.log(car.color);
console.log(car);

//delete properties of object
let obj ={
  prop1: "value1",
  prop2: "value2",
  prop3:"value3"
}
let returnvalue = delete obj.prop1;
console.log(returnvalue);
console.log(obj.prop1);
console.log(obj);
