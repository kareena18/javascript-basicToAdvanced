//submit events
let f = document.querySelector(".sign-up-Form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
f.addEventListener('submit',(e) => {
  e.preventDefault();
  console.log(email.value,password.value);
  console.log(form.email.value,form.password.value);//preferred
  console.log(form.userEmail.value,form.userPassword.value);
})
