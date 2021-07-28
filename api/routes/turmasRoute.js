//routes/niveisRoute.js

const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmaController.pegarTurma)
router.post('/turmas', TurmaController.criarTurma)
router.put('/turmas/:id', TurmaController.atualizarTurma)
router.delete('/turmas/:id', TurmaController.apagarTurma)
module.exports = router