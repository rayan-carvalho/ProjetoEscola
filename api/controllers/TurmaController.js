const database = require('../models')

class TurmaController{

    static async pegaTodasAsTurmas(req, res){

        try {
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        }        

    }

    static async pegarTurma(req, res){

        const { id } = req.params

        try {
            const umaTurma = await database.Turmas.findOne({ 
                where: {
                    id:Number(id)
                } 
            })
            return res.status(200).json(umaTurma)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async criarTurma(req, res){

        const novaTurma = req.body

        try {
            const novaTurma = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurma)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async atualizarTurma(req, res){

        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Turmas.update(novasInfos,{
                where: {
                    id:Number(id)
                }
            })
            const turmaAtualizado = await database.Turmas.findOne({ 
                where: {
                    id:Number(id)
                } 
            })
            return res.status(200).json(turmaAtualizado)
        } 
        catch (error) {
            return res.status(500).json(error.message)
        } 

    }

    static async apagarTurma(req, res){

        const { id } = req.params       

        try {
            await database.Turmas.destroy({
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

module.exports = TurmaController