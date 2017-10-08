vedisebin =(numerodacontrollare) ->
  console.log("Avviato numerodacontrollare")
  while numerodacontrollare>0
    if numerodacontrollare%10 != 0 && numerodacontrollare%10 != 1
      return false
    numerodacontrollare=parseInt(numerodacontrollare/10)
  return true

inbin =(numerodec)  ->
  console.log("Avviato inbin")
  numerocorrente=numerodec
  resti=0
  contatore=1
  while numerocorrente>0
    resti=resti+numerocorrente%2*contatore
    numerocorrente=parseInt(numerocorrente/2)
    contatore=contatore*10
  return resti

indec =(numerobin) ->
  console.log("avviato indec")
  numerocorrente = numerobin
  numerodauscire = 0;
  i=0
  if vedisebin(numerobin)
    console.log("Uscito da numerodacontrollare")
    while numerocorrente>0
      console.log("ciclo indec")
      numerodauscire=numerodauscire+numerocorrente%10*Math.pow(2,i)
      i++
      numerocorrente=parseInt(numerocorrente/10)
    console.log("fine ciclo indec")
    return numerodauscire
  else
    return "Non va bene"

conversionamento =(numerodaconvertire,bindec) ->
  console.log("avviato conversionamento")
  if bindec is 1
    return indec(numerodaconvertire)
  if bindec is 0
    return inbin(numerodaconvertire)


processForm =(e) ->
  console.log("Avviato processForm")
  if e.preventDefault
    e.preventDefault()
  decbin = document.getElementById("decbin").checked
  bindec = document.getElementById("bindec").checked
  numeroconvertito=conversionamento(parseInt(document.getElementById("numero").value),1) unless bindec is false
  numeroconvertito=conversionamento(parseInt(document.getElementById("numero").value),0) unless decbin is false
  if numeroconvertito is "Non va bene"
    alert "Non hai messo un numero binario"
    return false
  alert "Il tuo numero convertito è"+numeroconvertito
  console.log("Fermato processForm")
  return false
  console.log("Fermato processForm")
  alert "Inizio!"
  console.log("Fermato processForm")

console.log("Javascript iniziato")
form = document.getElementById('conversione')
if form.attachEvent
  form.attachEvent("submit", processForm)
else
  form.addEventListener("submit", processForm)
