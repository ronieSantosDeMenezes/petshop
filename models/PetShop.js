const mongoose = require('mongoose')

const PetShop = mongoose.model('PetShop', {
    cliente:  String,
    animal:   String,
    raca:     String,
    valor:    Number
    

})

module.exports = PetShop