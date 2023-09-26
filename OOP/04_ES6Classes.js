//object oriented programming

//ES6 classes(they still implement prototypal inheritance behind the scene)

// class declaration
class car{
  constructor(color,model){
    this.color=color;
    this.model=model;
  }
  startEngine(){
    console.log("this is start engine of car class");
  }
}
car.prototype.breakMethod=function(){
  console.log("break method of car");
}

let honda = new car("red",2022);
//console.log(honda.__proto__isPrototypeOf(honda));
console.log(honda);
honda.startEngine();

//class are not hoidted, class are also first class citizen(pass as an argument or return)
//class are executed in strict mode
