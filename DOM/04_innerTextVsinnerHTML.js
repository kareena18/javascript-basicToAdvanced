//updating and changing content

//innerText
//ignore spaces
//retrive and set content in Plain format
let content = document.querySelector('.content');
content.innerText+="<p>great coders</p>";
console.log(content.innerText);

//innerHTML
//it does not ignore spaces
//retrive and set content in HTML format
content.innerHTML+="<p>great coders</p>";
console.log(content.innerHTML);
