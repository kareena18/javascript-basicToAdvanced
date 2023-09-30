//asynchronous javascript

//async and await
//also non blocking
let getTodos=async()=>{
  let response = await fetch("data.json");
  let data=await response.json();
  return data;
}
console.log(1)
getTodos().then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})
console.log(2);
