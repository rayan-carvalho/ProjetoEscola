const database = require('../models')

class PessoaController{

    static async pegaTodasAsPessoas(req, res){

        try {
            const pegaTodasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(pegaTodasAsPessoas)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        }        

    }

}

module.exports = PessoaController