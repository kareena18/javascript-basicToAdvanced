//sorting array using sort method

//by default sort method is used to sort strings
//it firstly convert everything into string and then....
let letters=["d","e","f","a","b"];
console.log(letters.sort());

let nums=[2,4,1,98,32,-6,-23,-1,0];
console.log(nums.sort());//unexpected

//if a-b<0 => a<b => a,b (keep order same)
//if a-b>0 => a>b => b,a (switch the order)

nums.sort((a,b)=>{
  /*if(a<b){
    return -1;//any num less than 0
  }
  if(A>b){
    return 1;//greater than 0
  }*/
  //return a-b;//ascending order
  return b-a;//descending order
});

//in the end we want to return either negative or positive
console.log(nums);
