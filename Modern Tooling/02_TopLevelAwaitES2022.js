//modern javascript module and tooling
//top level await ES2022
//before ES2002 we can use await only inside async function
//but in ES2022 introduced top level "await"
//it means now we can use "await" outside the async function

//starting
console.log("start using top level await");
let gettodo = async()=>{//now no blocking
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
let data= await response.json();
console.log(data);
}
gettodo();
console.log("finishing");

//top level await block the execution next code
