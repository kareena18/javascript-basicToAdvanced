//modern javascript modules, and tooling

//exporting and importing ES6 modules - just include type="module" in script tag in index.html
//importing module without value
//import {order,laptopPrice,quant as q} from './product.js'
/*import * as singleVariable from './product.js'
console.log("importing module");
singleVariable.order("jack","laptop");
console.log("laptop price: ",singleVariable.laptopPrice);
console.log("quantity: ",singleVariable.quant);
console.log(singleVariable);*/

//importing "default"
import order from './product.js';
order("mike","bike");
order("gourav","pizza");
order("kareena","french fries");
