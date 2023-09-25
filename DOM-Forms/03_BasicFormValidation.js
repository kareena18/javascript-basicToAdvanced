//regular expression part-2(regex)
//basic form validation using regex
//implement username validation
//username can only consist of A-Z or a-z
//length of username between 6 to 12
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
