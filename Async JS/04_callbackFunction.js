//asynchronous javascript

//callback function
let todos=(callback)=>{
  let request = new XMLHttpRequest();
  console.log(request,request.readyState);
  request.addEventListener('readystatechange',()=>{
    //console.log(request,request.readyState);
    if(request.readyState===4 && request.status==200){
      //console.log(request.responseText);
      callback(undefined,request.responseText);
    }
    else if(request.readyState===4){
      //console.log("data could not fetch");
      callback("data could not be fetch",undefined);
    }
  })
  
  //set up the request
  request.open('Get',"https://jsonplaceholder.typicode.com/todos");
  //sending the request
  request.send();  
}

console.log(1);
console.log(2);

//async code example
todos((error,data)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log(data);
  }
});

console.log(3);
console.log(4);
