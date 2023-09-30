//asynchronous javascript

//callback hell(chain of callback function inside one another)
let todos=(resource,callback)=>{
  let request = new XMLHttpRequest();
  console.log(request,request.readyState);
  request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);
    if(request.readyState===4 && request.status==200){
      //console.log(request.responseText);
      //let data=JSON.parse(request.responseText);
      //callback(undefined,data);//regular js object
      callback(undefined,request.responseText);
      
    }
    else if(request.readyState===4){
      //console.log("data could not fetch");
      callback("data could not be fetch",undefined);
    }
  })
  
  //set up the request
  //request.open('Get',"https://jsonplaceholder.typicode.com/todos");
  request.open("GET",resource);
  //sending the request
  request.send();  
}

console.log(1);
console.log(2);

//async code example
//chain of todos function(callback) => callback hell
todos("dat.json",(error,data)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
  }
  todos("mario.json",(error,data)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
  }
  todos("lurie.json",(error,data)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
  }
  });
  });
});

console.log(3);
console.log(4);
