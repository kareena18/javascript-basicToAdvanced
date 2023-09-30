//error handling using try catch method

let getTodos=async()=>{
  try{
      let response = await fetch("data.json");
      let data=await response.json();
      let response2=await fetch("mario.json");
      let marioData=await response2.json();
      console.log(data2,marioData1);
  }
  catch(error){
    console.log(error.message);
  }
  
}

//we donot need to chain anything as previously
getTodos();

/*try{
  let x=4;
  const y=6;
  y=x;
}
catch(error){
  console.log(error.message);
}*/
