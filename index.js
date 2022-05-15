const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PetShop = require('./models/PetShop')



//Metodo para enviar e receber JSON!!
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//Rotas HTTP!
app.get('/petshop', async (req, res) =>{
    try {
        const petshop = await PetShop.find()
        res.json(petshop)
        
    } catch (error) {
        res.json({error:'porrrra'})
    }
})

app.post('/petshop',(req,res) => {

    const {cliente, animal, raca, valor} = req.body
    if(cliente == ''){
        return res.json({message: 'O nome do cliente é obrigatorio'})
    }
    if(animal == ''){
        return res.json({message: 'O nome do animal é obrigatorio!'})
    }
    if(raca == ''){
        return res.json({message: 'É obrigatorio preencher o campo !'})
    }
    if(valor == '' ){
        return res.json({message: 'É obrigatorio preencher o campo !'})
    }
    const petshop = {
        cliente,
        animal,
        raca,
        valor
    }

    try {
        PetShop.create(petshop)
        res.json({message: 'Cadastro do Cliente inserido com sucessso!!'})
        
    } catch (error) {
        res.json({error:error})
        
    }
})


//Conenexão do Banco MongoDB
mongoose.connect(process.env.BANCO_PETSHOP)
.then(() =>{
    console.log("mongoDB Conectado!!!!!!!")
    app.listen(2000)  
})
.catch((err) => console.log(err))



