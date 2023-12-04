// evento al click del pulsante Genera
var btnGenerate = document.getElementById('generate')
btnGenerate.addEventListener(
    'click',

    function () {
        var passengerName = document.getElementById('name').value
        console.log('Nome del passeggero:', passengerName)

        var km = document.getElementById('km').value
        console.log('km da percorrere:', km)

        var age = document.getElementById('age').value
        console.log('età:', age)

        var ticketPrice = Math.floor(km * 0.21)
        var discount
        var discountType
        console.log('Prezzo del biglietto pieno:', ticketPrice)

        // calcolo sconto per età
        if (age == 'minorenne') {
            discount = ticketPrice * 0.2
            discountType = 'Sconto Bronze'
        } else if (age == 'over65') {
            discount = ticketPrice * 0.4
            discountType = 'Sconto Silver'
        } else {
            discount = 0
            discountType = 'Biglietto standard'
        }

        // calcolo prezzo finale
        var finalPrice = ticketPrice - discount
        console.log('Prezzo dello sconto:', discount)
        console.log('Prezzo del biglietto finale:', finalPrice)
        console.log('Tipo di sconto:', discountType)
    }
)
