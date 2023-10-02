//function
//closures
//it means "inner" function has an access to the variables and parameters of outer function even after outer function has returned

let outerfunction = function(outerParameter){
  let outerVariable="outer variable";
  let innerfunction=function(){
    console.log(outerVariable," \\ ",outerParameter);
  }
  return innerfunction;
}
let innerfunc=outerfunction("outer parameter");
innerfunc();
