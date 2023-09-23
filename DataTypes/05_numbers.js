//numbers

let score = 51;
console.log(score, typeof score);

//mathematical operator + - * / % **
let result = score / 2;//give quotient
let result1 = score % 2;//give remainder
console.log(result);
console.log(result1);

//mathematical expression
let res = score * 2 + (4 * 3) - 8 / 2 % 4;
//using priority and precedence
//1() brackets
//2**power operator
//3*/% (from left to right)
//4+-(from left to right)
console.log(res);

//concatenation of number

let name = "my score is " + score;
console.log(name);