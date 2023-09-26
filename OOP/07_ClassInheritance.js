//object oriented programming
//class inheritance(sub class)

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
//child class
class bike extends car{
  //add some new properties and "method" as well
  constructor(color,model,engineCapacity){
    super(color,model);
    this.engineCapacity=engineCapacity;
  }
  bikeMethod(){
    console.log("this is method of bike class");
  }
}
let newBike=new bike("black",2023,"125CC");
let bike2=new bike("brown",2011,"200cc");
console.log(newBike);

let honda = new car("red",2022);
console.log(honda);
