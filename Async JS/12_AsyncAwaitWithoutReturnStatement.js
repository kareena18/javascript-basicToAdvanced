//async await without return statement

//let suppose we want to get more than one data
let getTodos=async()=>{
  let response = await fetch("data.json");
  let data=await response.json();
  let response2=await fetch("mario.json");
  let marioData=await response2.json();
  console.log(data,marioData);
}

//we donot need to chain anything as previously
getTodos();
