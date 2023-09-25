//getting html elements using queryselector/all
//queryselector returns "first element" that match css selector
//to get all matched elements we use queryselectorall

let resultedElement = document.querySelectorAll('p');
console.log(resultedElement);//nodelist

//access element with class
let resulted = document.querySelector('.coderdost');
console.log(resulted);

//access element with id
let resulted1 = document.querySelector('#coders');
console.log(resulted1);
