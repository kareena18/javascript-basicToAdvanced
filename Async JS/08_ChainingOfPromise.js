//asynchronous javascript

//chaining of promises

let todos=(resource,callback)=>{
  return new Promise((resolve,reject)=>{
      let request = new XMLHttpRequest();
      //console.log(request,request.readyState);
      request.addEventListener('readystatechange',()=>{
        //console.log(request,request.readyState);
        if(request.readyState===4 && request.status==200){
          //console.log(request.responseText);
          let data=JSON.parse(request.responseText);
          resolve(data);
        }
        else if(request.readyState===4){
          //console.log("data could not fetch");
          reject("Error in fetching the data");
        }
      })
      
      //set up the request
      //request.open('Get',"https://jsonplaceholder.typicode.com/todos");
      request.open("GET",resource);
      //sending the request
      request.send();  
    })
}

//chaining of promises
todos("data.json").then((data)=>{
  console.log("promise 1 resolved",data);
  return todos("luries.json");
}).then((data)=>{
  console.log("promise 2 resolved",data);
  return todos("marios.json");
}).then((data)=>{
  console.log("promise 3 resolved",data);
}).catch((error)=>{//only one catch method enough to  catch any error
  console.log(error);
})
