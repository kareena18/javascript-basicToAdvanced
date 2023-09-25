//bubbling and delegation

//creating

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
/*let elements = document.querySelectorAll("li");
console.log(elements);
elements.forEach(function(element){
  element.addEventListener("click",function(e){
    console.log("inside li");
 e.target.remove();
  })
})*/


const ul = document.querySelector("ul");
ul.addEventListener('click',function(){
  //console.log("inside ul");
  if(e.target.nodeName=="li"){
    e.target.remove();
  }
})
