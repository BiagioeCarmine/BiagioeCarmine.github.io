function indec(numerobin) {
  return numerobin;
}
function inbin(numerodec) {
  return numerodec+50;

}
function conversionamento(numerodaconvertire,bindec) {
  alert("Conversione chiamato");
  if(bindec==1) {
    return indec(numerodaconvertire);
  }
  if(bindec==0) {
    return inbin(numerodaconvertire);
  }
}
function processForm(e) {
      if (e.preventDefault) e.preventDefault();
      alert("processForm chiamato");
      var decbin = document.getElementById("decbin").checked;
      var bindec = document.getElementById("bindec").checked;
      if(bindec) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),1);
      if(decbin) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),0);
      alert("Il tuo numero convertito è"+numeroconvertito);
      return false;
}
var form = document.getElementById('conversione');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
