//passing values (argument and parameter)
//when we give default value to the parameter then we call it as arguments

let invitation = function(name="sam",time="night"){//local variable to the function
  console.log(`welcome! ${name} you are invited on our event at ${time}`);
}

//console.log(name);
invitation("marie","morning");
invitation();// undefined --- after giving default value it is replaced by the default value
invitation("harry");
