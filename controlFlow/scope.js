//variable and block scope 

//scope- area where variables is defined or accessible

let score =90;//global
if(true){
    let score =50;
    console.log(score);
}
console.log(score);

//const can't be reassigned and only accessible inside the block
//var can accessible outside the scope