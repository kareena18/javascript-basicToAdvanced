//getting and setting attribute of element

let link = document.querySelector('a');
console.log(link.getAttribute('href'));

//set the attribute
link.setAttribute('href',"https://www.youtube.com/");
console.log(link.getAttribute('href'));
link.innerText="master run";
