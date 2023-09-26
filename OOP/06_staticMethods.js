//object oriented programming

//static methods (method which is not present on constructor "prototype" property but constructor itself)

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
//static method(can never inherited to all objects)
car.breakMethod = function(){
  console.log("this is break method of car");
}

let honda = new car("red",2022);
honda.startEngine();
//honda.breakMethod();//error
car.breakMethod();
