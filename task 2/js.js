function bg1(){
    let bg = document.body;
    bg.style.backgroundColor = "red";
}

function bg2(){
    let bg = document.body;
    bg.style.backgroundColor = "green";
}

function bg3(){
    let bg = document.body;
    bg.style.backgroundColor = "yellow";
}



function okno() {
    let newOkno;
    newOkno = window.open('', '', 'width=400,height=200');

    newOkno.document.write(`
        <html>
            <head>
                <title>newDocument</title>
            </head>

            <body>
                <button onclick="window.close()">закрыть</button><br>

                <div id="okno" class="okno">
                    <button id="okno" class="okno" onclick="okno()">пасхалка</button>
                </div>

                <script src="js2.js"></script>
            </body>
        </html>
    `);
}



function blok() {
    let newBlock = document.createElement('div');
    newBlock.classList.add('blok');
    
    newBlock.innerHTML = `
        <button onclick="this.parentElement.remove()">Удалить блок</button>    `;
    
    document.getElementById('blok').appendChild(newBlock);
}



function plus(){
    let body = document.body;
    let razmer = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (razmer + 5) + 'px';
}

function minus(){
    let body = document.body;
    let razmer = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (razmer - 5) + 'px';
}




function hoverOver(element) {
    element.innerHTML = "ЗАБАЙТИЛСЯ";
}

function hoverOut(element) {
    element.innerHTML = "НАВЕДИСЬ";
}

function bg1(){
    let bg = document.body;
    bg.style.backgroundColor = "red";
}

function bg2(){
    let bg = document.body;
    bg.style.backgroundColor = "green";
}

function bg3(){
    let bg = document.body;
    bg.style.backgroundColor = "yellow";
}



function okno() {
    let newOkno;
    newOkno = window.open('', '', 'width=400,height=200');

    newOkno.document.write(`
        <html>
            <head>
                <title>newDocument</title>
            </head>

            <body>
                <button onclick="window.close()">закрыть</button><br>

                <div id="okno" class="okno">
                    <button id="okno" class="okno" onclick="okno()">пасхалка</button>
                </div>

                <script src="js2.js"></script>
            </body>
        </html>
    `);
}



function blok() {
    let newBlock = document.createElement('div');
    newBlock.classList.add('blok');
    
    newBlock.innerHTML = `
        <button onclick="this.parentElement.remove()">Удалить блок</button>    `;
    
    document.getElementById('blok').appendChild(newBlock);
}



function plus(){
    let body = document.body;
    let razmer = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (razmer + 5) + 'px';
}

function minus(){
    let body = document.body;
    let razmer = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = (razmer - 5) + 'px';
}




function hoverOver(element) {
    element.innerHTML = "ЗАБАЙТИЛСЯ";
}

function hoverOut(element) {
    element.innerHTML = "НАВЕДИСЬ";
}
