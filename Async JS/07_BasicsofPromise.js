//asynchronous javascript

//promise example practical

let todos=(resource,callback)=>{
  return new Promise((resolve,reject)=>{
      let request = new XMLHttpRequest();
      console.log(request,request.readyState);
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
todos("data.json").then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})
  

//promise general example
/*(let getSomething=()=>{
  return new Promise((resolve,reject)=>{
    //resolve("some data");//dummy
    reject("error");
  })
}
getSomething().then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})*/
