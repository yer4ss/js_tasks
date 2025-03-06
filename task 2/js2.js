function okno() {
    let newOkno;
    newOkno = window.open('', '', 'width=400,height=200');

    newOkno.document.write(`
        <html>
            <head>
                <title>пасхалка</title>
            </head>

            <body>

                <div id="okno" class="okno">
                    <button id="okno" class="okno" onclick="okno()">пасхалка</button>
                </div>

                <script src="js2.js"></script>
            </body>
        </html>
    `);
}