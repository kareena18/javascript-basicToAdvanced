//this keyword

//in each method we have an access of special keyword called "this"
//"this" keyword represent the object. "calling" the "method" in which "this" is present

let person={
  firstName:"Kareena",
  lastName:"Sahoo",
  city:"Rourkela",
  birthyear:2002,
  education:"btech",
  getSummary:function(){
    //return `${this.firstName} ${this.lastName} lives in ${this.city}.Her birth year is ${this.birthyear}`;
    return this;//here this represent the whole object
  }
}
console.log(person.getSummary());

//step 1: check in which method we use "this" keyword
//step 2: owner of that method (who is calling those method)
