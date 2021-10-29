const Router = require('express').Router
const router = Router()
const infracoesService = require('../services/infracoes_service')

router.get('/', async (req, res) => {
  const infracoes = await infracoesService.getInfracoes()

  return res.json(infracoes)
})

router.get('/:codigo', async (req, res) => {
  const { codigo } = req.params

  const infracao = await infracoesService.getInfracaoByCodigo(codigo)

  return res.json(infracao)
})

module.exports = router