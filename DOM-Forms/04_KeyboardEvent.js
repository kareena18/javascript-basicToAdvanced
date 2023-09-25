//keyboard events

let f = document.querySelector(".sign-up-Form");
let email = document.querySelector("#email");
let user = document.querySelector("#name");
let usernamePattern=/^[A-Za-z]{6,12}$/;
f.addEventListener('submit',(e) => {
  e.preventDefault();
let username = user.value;
 //test method return boolean values
  let result = usernamePattern.test(username);
  if(result==true){
    console.log("username is valid");
  }
  else{
    console.log("try again");
  }
  //console.log(username);
})

//live feedback
user.addEventListener("keyup",(e)=>{
  if(usernamePattern.test(e.target.value)){
    console.log("passed");
  }
  else{
    console.log("failed");
  }
})
