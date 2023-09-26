//some and every method

//some method return true if any array element pass the test
//every method return true if all array element pass the test

let scores =[23,45,67,21,52,73];
let result = scores.some(score=>{
  return score>50;
})
console.log(result);

let newScore=scores.every(scores=>{
  return scores>45;
})
console.log(newScore);
