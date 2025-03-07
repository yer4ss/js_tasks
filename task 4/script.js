
let button = document.querySelector(".clckBtn");
button.addEventListener("click", function() {
   console.log("клик");
});

let textElement = document.querySelector(".dblClck");
textElement.addEventListener("dblclick", function() {
   textElement.textContent = "+ 1 Хамстер";
});

let msDwnElement = document.querySelector(".msDwn");
msDwnElement.addEventListener("mousedown", function() {
   msDwnElement.style.backgroundColor = "red";
});

msDwnElement.addEventListener("mouseup", function() {
   msDwnElement.style.backgroundColor = "skyblue";
});
