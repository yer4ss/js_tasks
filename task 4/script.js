let button = document.getElementById("clckBtn");
button.addEventListener("click", function() {
            console.log("Кнопка нажата");
});


let textElement = document.getElementById("dblClck");
textElement.addEventListener("dblclick", function() {
            textElement.textContent = "Двойной клик!";
});