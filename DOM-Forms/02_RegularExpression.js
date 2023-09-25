//regular expression

//it is a pattern of characters used to do pattern matching or we can say for "data validation"

//implementation of password validation

//length atleast = 8, atleast contain one uppercase letter, atleast contain one lowercase letter, atleast contain one digit 0 to 9
let f = document.querySelector(".sign-up-Form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let passwordPattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";
f.addEventListener('submit',(e) => {
  e.preventDefault();
  let passwordValue=password.value;
  console.log(passwordValue);
  let result = passwordValue.match(passwordPattern);
  console.log(result);
  if(result)
      console.log("password is strong");
  else
      console.log("password is weak");
})
