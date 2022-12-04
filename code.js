/////////////////////////////////////////////////////////////////////
/////////////////////// Event Listener /////////////////////////////
// Event Listener für Button "Start". Macht einen Callback auf startGame().
function startGameButtonEventListener(){
    let start = document.getElementById("start");
    start.addEventListener("click", startGame);
    return start;
}
startGameButtonEventListener();

// Allgemeine createElement-Funktion. Nimmt den Elementtyp und ein Objekt mit Attributwerten entgegenen.
// Ein Element mit entsprechendem Typ wird erstellt. Danach wird durch die Attribute des Objekts iteriert 
// und diese werden dem Element hinzugefügt. Am Ende wird das fertige Element dem HTML Main-Container hinzugefügt.
// Hilfreiche Quellen: https://stackoverflow.com/questions/43168284/javascript-createelement-function
// https://www.w3schools.com/jsref/met_document_createelement.asp
function createElement(type, attributes){
    let element = document.createElement(type);
    for (var key in attributes){
        element[key] = attributes[key];
    }
    document.getElementById("container").appendChild(element);
}
/////////////////////////////////////////////////////////////////////
/////////////////////// Kern-Funktionen /////////////////////////////
// Funktion, die das Spielfeld aufbaut. Wird über den Start-Button aufgerufen.
function startGame(){
    // Prüfen, ob schon eine Runde gespielt wurde. Falls ja, Spielfeld löschen und neu erstellen.
    if (document.getElementById("info1")){
        // Alte Elemente entfernen */
        document.getElementById("info1").remove();
        document.getElementById("info2").remove();
        document.getElementById("guess").remove();
        document.getElementById("ok-btn").remove();
        document.getElementById("info3").remove();
        while (document.getElementById("teilbar")){
            document.getElementById("teilbar").remove();
        }
        while (document.getElementById("nichtTeilbar")){
            document.getElementById("nichtTeilbar").remove();
        };
        /* document.getElementById("message2").remove();
        document.getElementById("message3").remove(); */
    }
    /////// Spielfeld aufbauen
    // Neue Text-Elemente erstellen. Info an User.
    createElement("h3", {"innerHTML":"Wir überprüfen, ob eine beliebige Zahl<br/>durch 2, 3, 5, 7, 11, 13 oder 17 teilbar ist", "id":"info1"});
    createElement("h3", {"innerHTML":"Gib eine beliebige Zahl im Kästchen ein und<br/>drücke 'OK' oder 'Enter'", "id":"info2"});

    // Erstelle Input Feld mit Typ Zahlen.
    createElement("input", {"type":"number", "id": "guess"});

    // Erstelle OK-Button
    createElement("button", {"textContent":"OK", "id":"ok-btn"});
    
    /////// Event Listener
    // Event Listener auf Ok-Button mit Callback auf divissionImPossible().
    let compare = document.getElementById('ok-btn');
    compare.addEventListener("click", divissionImPossible);

    // Event Listener, der beim Drücken von "Enter" einen click auf den OK-Button auslöst.
    // Dies geht nur, wenn das Input Feld aktiv ist, d.h. wenn darin eine Eingabe passiert. 
    let input = document.getElementById("guess");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("ok-btn").click();
        }
    });
}
// Prüft, ob Zahlen ohne Rest teilbar sind und erstellt Rückmeldungen.
function divissionImPossible(){
    // Eingegebene Zahl einlesen
    let x = document.getElementById("guess").value;
    // Teiler in Array ablegen
    let a = [2,3,5,7,11,13,17]
    // Die eingegebene Zahl wird nacheinander durch alle Zahlen im Array geteilt. Prüfung auf Rest=0?    
    for (let i in a){
        if ((x % a[i] == 0) || (x % a[i] == -0)){
            createElement("p", {"textContent":"Die Zahl ist teilbar durch " + a[i], "id":"teilbar"});
        }
        else {
            createElement("p", {"textContent":"Die Zahl ist nicht teilbar durch " + a[i], "id":"nichtTeilbar"});
        }
    }
    document.getElementById("ok-btn").removeEventListener("click", divissionImPossible);
    createElement("h1", {"textContent":"Drücke auf Start für noch eine Runde", "id":"info3"});
}