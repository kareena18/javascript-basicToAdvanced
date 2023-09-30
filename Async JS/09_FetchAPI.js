//asynchronous javascript

//fetch API
fetch("data.json").then((response)=>{
  console.log("promise resolved",response);
  return response.json();//returning promise
}).then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})
