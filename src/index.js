indec = numerobin =>  {
  console.log("avviato indec")
  var numerocorrente=numerobin
  var numerodauscire=0
  var i=0
  if(vedisebin(numerobin))  {
    console.log("vedisebin positivo")
    while(numerocorrente>0) {
      numerodauscire=numerodauscire+numerocorrente%10*2**i
      i++
      numerocorrente=parseInt(numerocorrente/10)
    }
    return numerodauscire
  } else  return "non va bene"
}

inbin = numerodec =>  {
  console.log("avviato inbin")
  var numerocorrente=numerodec;
  var resti=0
  var contatore=1
  while(numerocorrente>0) {
    resti=resti+(numerocorrente%2)*contatore
    numerocorrente=parseInt(numerocorrente/2)
    contatore=contatore*10
  }
  return resti
}

conversionamento = (numerodaconvertire,bindec) => {
  console.log("Avviato conversionamento")
  if(bindec==1) return indec(numerodaconvertire)
  if(bindec==0) return inbin(numerodaconvertire)
}
processForm = nostroform =>  {
  if (nostroform.preventDefault) nostroform.preventDefault()
  var decbin = document.getElementById("decbin").checked
  var bindec = document.getElementById("bindec").checked
  if(bindec) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),1)
  if(decbin) numeroconvertito = conversionamento(parseInt(document.getElementById("numero").value),0)
  if(numeroconvertito=="non va bene") alert("Non hai messo un numero binario")
  else alert("Il tuo numero convertito è "+numeroconvertito)
  return false
}
