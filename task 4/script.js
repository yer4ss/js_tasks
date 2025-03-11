
const botton = document.querySelector(".btn");

let clickBtn = botton;
clickBtn.addEventListener("click", function() {
   console.log("клик");
});



let dblClck = document.querySelector(".dblClck");
dblClck.addEventListener("dblclick", function() {
   dblClck.textContent = "+ 1 Хамстер";
});



const blok = document.querySelector(".blok");

let msDwn = blok;
msDwn.addEventListener("mousedown", function() {
   msDwn.style.backgroundColor = "red";
});

let msUp = blok;
msUp.addEventListener("mouseup", function() {
   msUp.style.backgroundColor = "skyblue";
});

let bgColor = blok;
bgColor.addEventListener("mousemove", function() {
   let colors = ["blue", "green", "yellow", "purple", "orange"];
   let randomColor = colors[Math.floor(Math.random() * colors.length)];

   bgColor.style.backgroundColor = randomColor;
});



let msOvr = botton;
msOvr.addEventListener("mouseover", function() {
   msOvr.style.backgroundColor = "blue";
});

let msOut = botton;
msOut.addEventListener("mouseout", function() {
   msOut.style.backgroundColor = "skyblue";
});


window.addEventListener("scroll", function() {
   console.log(window.scrollY);
});



const bg = document.body;

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function(){
   bg.style.backgroundColor = "red";
});

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function(){
   bg.style.backgroundColor = "green";
});

let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function(){
   bg.style.backgroundColor = "yellow";
});



let scrll = document.querySelector(".scrll");

window.addEventListener("scroll", function() {
   scrll.textContent = `${window.scrollY}`;
});