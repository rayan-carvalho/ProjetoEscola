const database = require('../models')

class NivelController{

    static async pegaTodasOsNiveis(req, res){

        try {
            const todasOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todasOsNiveis)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        }        

    }

    static async pegaUmNivel(req, res){

        const { id } = req.params

        try {
            const umNivel = await database.Niveis.findOne({ 
                where: {
                    id:Number(id)
                } 
            })
            return res.status(200).json(umNivel)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async criarNivel(req, res){

        const novoNivel = req.body

        try {
            const novaPessoaCriada = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivel)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async atualizarNivel(req, res){

        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Niveis.update(novasInfos,{
                where: {
                    id:Number(id)
                }
            })
            const nivelAtualizado = await database.Niveis.findOne({ 
                where: {
                    id:Number(id)
                } 
            })
            return res.status(200).json(nivelAtualizado)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async apagarNivel(req, res){

        const { id } = req.params       

        try {
            await database.Pessoas.destroy({
             where: {
                    id:Number(id)
                }
            })          
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

}

module.exports = NivelController