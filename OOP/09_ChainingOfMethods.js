//chaining of methods

//class declaration
class bankAccount{
  constructor(owner,pin){
    this.owner=owner;
    this.pin=pin;
    this.movements=[];
  }
  getMovements(){
    return this.movements;
  }
  deposit(val){
    this.movements.push(val);
    return this;
  }
  withdraw(val){
    this.deposit(-val);
    return this;
  }
}
let account = new bankAccount("jack",5678);
//chain of method
account.deposit(45).withdraw(25).deposit(100).withdraw(35);
account.withdraw(65);
console.log(account.getMovements());
console.log(account);
