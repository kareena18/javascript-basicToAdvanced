//object inside array
let blocklist=[{username:"kareena",age:21},{username:"gourav",age:23},{username:"preeti",age:18}];
console.log(blocklist);

for(let i=0;i<blocklist.length;i++){
  console.log(blocklist[i]);
  console.log(`username ${blocklist[i].username} having age ${blocklist[i].age}`);
}
