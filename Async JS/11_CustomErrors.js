//asynchronous javascript

//async and await(throwing custom error)
//also non blocking
let getTodos=async()=>{
  let response = await fetch("data88.json");
  //custom error
  if(response.status!=200){
    throw new Error("Custom:Error in fetching the data");
  }
  let data=await response.json();
  return data;
}
getTodos().then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error.message);
})
