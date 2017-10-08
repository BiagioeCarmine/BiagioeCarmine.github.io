vedisebin =(numerodacontrollare) ->
  console.log "Avviato numerodacontrollare"
  while numerodacontrollare>0
    if numerodacontrollare%10 != 0 && numerodacontrollare%10 != 1
      return false
    numerodacontrollare=parseInt(numerodacontrollare/10)
  return true
window.vedisebin = vedisebin # per chiamarlo da altre funzioni
