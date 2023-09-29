//asynchronous javascript

//HTTP response status code

//informational responses (100-199)
//successful responses(200-299)
//redirection messages(300-399)
//client error responses(400-499)
//server error responses(500-599)
let request = new XMLHttpRequest();
console.log(request,request.readyState);
request.addEventListener('readystatechange',()=>{
  //console.log(request,request.readyState);
  if(request.readyState===4 && request.status==200){
    console.log(request.responseText);
  }
})

//set up the request
request.open('Get',"https://jsonplaceholder.typicode.com/todos");
//sending the request
request.send();

//value state description
//0 UNSENT client has been created open() not called yet
//1 OPENED open() has been called
//2 HEADER_RECEIVED send() has been called, and headers
//3 LOADING downloading responseText holds partial data
//5 DONE the operation is complete
