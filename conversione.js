function indec(numerobin) {                       // indec() e inbin() non sono difficili da spiegare in fondo
  var numerocorrente = numerobin;
  var numerodauscire = 0;
  var i = 0;
  while(numerocorrente>0) {
    numerodauscire=numerodauscire+numerocorrente%10*Math.pow(2,i);
    i++;
    numerocorrente=parseInt(numerocorrente/10);
  }
  return numerodauscire;
}
function inbin(numerodec) {                     // indec() e inbin() non sono difficili da spiegare in fondo
  var numerocorrente = numerodec;
  var resti = 0;
  var contatore = 1;
  while(numerocorrente>0) {
    resti=resti+(numerocorrente%2)*contatore;
    numerocorrente=parseInt(numerocorrente/2);
    contatore=contatore*10;
  }
  return resti;
}
function conversionamento(numerodaconvertire,bindec) {  // Il numero 1 o 0 passato prima questa funzione lo chiama bindec,
  if(bindec==1) {                                       // se è uguale a 1 esegue la funzione indec(), se è 0 esegue la funzione
    return indec(numerodaconvertire);                   // inbin()
  }
  if(bindec==0) {
    return inbin(numerodaconvertire);
  }
}
function processForm(e) {
      if (e.preventDefault) e.preventDefault(); // Per evitare che il form provi a fare cose che non deve fare
      var decbin = document.getElementById("decbin").checked; // la variabile decbin è una booleana che è true se il tasto decimale->binario è stato cliccato
      var bindec = document.getElementById("bindec").checked; // la variabile bindec è una booleana che è true se il tasto binario->decimale è stato cliccato
      if(bindec) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),1);  //  chiama la funzione conversionamento dando un numero e 0
      if(decbin) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),0);  // se l'utente ha selezionato decbin e 1 se l'utente ha selezionato bindec
      alert("Il tuo numero convertito è"+numeroconvertito);
      return false;
}
// La parte qua sotto aspetta che l'utente clicchi il tasto Invia e avvia la funzione processForm()
var form = document.getElementById('conversione');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
