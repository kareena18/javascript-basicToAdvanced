//digital clock

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let ticking = function(){
  let curr=new Date();
  let h=curr.getHours();
  let m=curr.getMinutes();
  let s=curr.getSeconds();
  hour.textContent=h;
  minute.textContent=m;
  second.textContent=s;
} 
setInterval(ticking,1000);//1000-1s
