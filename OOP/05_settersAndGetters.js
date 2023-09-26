//object oriented programming

//setters and getters
//getters and setters allow you to define object accessors(computed property)

//we can also use in class

// class declaration
class car{
  constructor(color,model){
    this.color=color;
    this.model=model;
  }
  startEngine(){
    console.log("this is start engine of car class");
  }
  get _startEngine(){
    console.log("this is start engine method using get");
  }
  set changeColor(color){
    console.log(this.color=color);
  }
  get _description(){
    return `color of bike is ${this.color} and its model is ${this.model}`;
  }
}

let honda = new car("red",2022);
console.log(honda);
honda.startEngine();//accessing as function
honda._startEngine;//accessing as property
honda.changeColor="blue";//set as property
console.log(honda._description);
console.log(honda);
