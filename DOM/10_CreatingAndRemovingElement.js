//create and removing the element

//creating
const ul = document.querySelector("ul");
let button = document.querySelector(".clickme");
console.log(button);

button.addEventListener("click",function(){
  //let h2 = document.createElement("h2");
  let li = document.createElement("li");
  li.textContent="something new";
  ul.append(li);
  //ul.prepend(li);
})

//removing
let elements = document.querySelectorAll("li");
console.log(elements);
elements.forEach(function(element){
  element.addEventListener("click",function(e){
 e.target.remove();
  })
})
