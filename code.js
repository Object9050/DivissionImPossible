let a = [2,3,5,7,11,13,17]
/////////////////////////////////////////////////////////////////////
/////////////////////// Event Listener /////////////////////////////
// Event Listener für Button "Start". Macht einen Callback auf startGame().
function startGameButtonEventListener(){
    let start = document.getElementById("start");
    start.addEventListener("click", startGame);
    return start;
}
startGameButtonEventListener();

function divissionImpossible(){
    // Eingegebene Zahl einlesen
    let x = document.getElementById("guess").value;
    // Die drei Dialogzeilen werden in Variablen gespeichert
    /* let msg1 = document.getElementById("message1");
    let msg2 = document.getElementById("message2");
    let msg3 = document.getElementById("message3");
    let msg4 = document.getElementById("message4");
    let msg5 = document.getElementById("message5");
    let msg6 = document.getElementById("message6");
    let msg7 = document.getElementById("message7"); */
    
    for (let i in a){
        if ((x % a[i] == 0) || (x % a[i] == -0)){
            console.log ("Die Zahl ist teilbar durch " + a[i]);
            /* msg1.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg2.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg3.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg4.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg5.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg6.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg7.innerHTML = "Die Zahl ist teilbar durch " + a[i]; */
        }
        else {
            console.log ("Die Zahl ist nicht teilbar durch " + a[i]);
            /* msg1.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg2.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg3.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg4.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg5.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg6.innerHTML = "Die Zahl ist teilbar durch " + a[i];
            msg7.innerHTML = "Die Zahl ist teilbar durch " + a[i]; */
        }
    }
}

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
    /////// Spielfeld aufbauen
    // Neue Text-Elemente erstellen. Info an User.
    createElement("h3", {"innerHTML":"Wir überprüfen, ob eine beliebige Zahl<br/>durch 2, 3, 5, 7, 11, 13 oder 17 teilbar ist", "id":"info1"});
    createElement("h3", {"innerHTML":"Gib deinen Tipp im Kästchen ein und<br/>drücke 'OK' oder 'Enter'", "id":"info2"});

    // Erstelle Input Feld mit Typ Zahlen.
    createElement("input", {"type":"number", "id": "guess"});

    // Erstelle OK-Button
    createElement("button", {"textContent":"OK", "id":"ok-btn"});

    // Erstelle 7 Dialog-Zeilen
    createElement("opo", {"textContent":"", "id":"message1"});
    createElement("p", {"textContent":"", "id":"message2"});
    createElement("p", {"textContent":"", "id":"message3"});
    createElement("p", {"textContent":"", "id":"message4"});
    createElement("p", {"textContent":"", "id":"message5"});
    createElement("p", {"textContent":"", "id":"message6"});
    createElement("p", {"textContent":"", "id":"message7"});

    
    /////// Event Listener
    // Event Listener auf Ok-Button mit Callback auf compareInput().
    let compare = document.getElementById('ok-btn');
    compare.addEventListener("click", divissionImpossible);

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