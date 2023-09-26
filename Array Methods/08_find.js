//find method
//it return the first element we are looking for...

let student =[{id:1,name:'alex'},{id:2,name:'john'}];

let result=student.find(students=>{
  return students.id===2;
})
console.log(result);
//can't find return undefined
