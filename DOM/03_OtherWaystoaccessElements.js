//other ways to get html elements

let querySelectorElement = document.querySelectorAll('p');
console.log(querySelectorElement);
querySelectorElement.forEach(element=>{
  console.log(element);
});//work for nodelist

//get element by tagname 
let tagName = document.getElementsByTagName('p');
console.log(tagName);
/*tagName.forEach(element=>{
  console.log(element);
});//doesn't work for html collection
*/

//get element by classname
let className = document.getElementsByClassName('coderdost');
console.log(className);

//get element by idname
let idName = document.getElementById('coders');
console.log(idName);
