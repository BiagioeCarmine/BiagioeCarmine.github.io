function Eccezione(messaggio) {
   this.messaggio = messaggio;
   this.nome = 'Eccezione';
}

var numeroconvertito: number;
function vedisebin(numerodacontrollare: number): boolean {
  console.log("avviato vedisebin");
  while(numerodacontrollare>0)  {
    if(numerodacontrollare%10!=0 && numerodacontrollare%10!=1)  {
      return false;
    }
    numerodacontrollare=Math.floor(numerodacontrollare/10);
  }
  return true;
}

function indec(numerobin: number): number {                       // indec() e inbin() non sono difficili da spiegare in fondo
  console.log("avviato indec");
  var numerocorrente = numerobin;
  var numerodauscire: number = 0;
  var i: number = 0;
  if (vedisebin(numerobin)) {
  console.log("uscito da vedisebin");
    while(numerocorrente>0) {
      numerodauscire=numerodauscire+numerocorrente%10*Math.pow(2,i);
      i++;
      numerocorrente=Math.floor(numerocorrente/10);
    }
    return numerodauscire;
  } else {
    throw new Eccezione("Numero non binario");
  }
}
function inbin(numerodec: number): number {                     // indec() e inbin() non sono difficili da spiegare in fondo
  console.log("avviato inbin");
  var numerocorrente = numerodec;
  var resti = 0;
  var contatore = 1;
  while(numerocorrente>0) {
    resti=resti+(numerocorrente%2)*contatore;
    numerocorrente=Math.floor(numerocorrente/2);
    contatore=contatore*10;
  }
  return resti;
}
function conversionamento(numerodaconvertire,bindec) {  // Il numero 1 o 0 passato prima questa funzione lo chiama bindec,
  console.log("avviato conversionamento");              // se è uguale a 1 esegue la funzione indec(), se è 0 esegue la funzione
  if(bindec==1) {                                       // inbin()
    try{
      return indec(numerodaconvertire);
    }
    catch(e)  {
      alert("Il numero che hai inserito non è binario");
    }
  }
  if(bindec==0) {
    return inbin(numerodaconvertire);
  }
}
function processForm(e) {
  console.log("avviato processForm");
      if (e.preventDefault) e.preventDefault(); // Per evitare che il form provi a fare cose che non deve fare
      var decbin = document.getElementById("decbin").checked; // la variabile decbin è una booleana che è true se il tasto decimale->binario è stato cliccato
      var bindec = document.getElementById("bindec").checked; // la variabile bindec è una booleana che è true se il tasto binario->decimale è stato cliccato
      if(bindec) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),1);  //  chiama la funzione conversionamento dando un numero e 0
      if(decbin) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),0);  // se l'utente ha selezionato decbin e 1 se l'utente ha selezionato bindec
      alert("Il tuo numero convertito è "+numeroconvertito);
      return false;
}
// La parte qua sotto aspetta che l'utente clicchi il tasto Invia e avvia la funzione processForm()
var form = document.getElementById('conversione');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
