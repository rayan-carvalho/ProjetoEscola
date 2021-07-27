const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router =  Router()

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoas', PessoaController.criarPessoa)

module.exports = router