//parent,children and sibling

let par = document.querySelector(".paren");
console.log(par);

//all children of parent
console.log(par.children);//html collection

//we can not run forEach method on html collection so first convert it into array
console.log(Array.from(par.children));
Array.from(par.children).forEach(function(element){
  element.classList.add("coders");
})

//child element
let childele= document.querySelector('h2');
console.log(childele.parentElement);

//find next/previous sibling  of child
console.log(childele.nextElementSibling);
console.log(childele.previousElementSibling);
