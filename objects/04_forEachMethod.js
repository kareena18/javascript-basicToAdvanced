//forEach method of array

//its another type of loop which we used to traverse over the array
let dishes = ["biryani","rice","puri","upma","suji","pasta","pizza"];

//using for loop
for(let i=0;i<dishes.length;i++){
  console.log(dishes[i]);
}
console.log("*************");

//using forEach loop
dishes.forEach(function(element){
  console.log(element);
});
