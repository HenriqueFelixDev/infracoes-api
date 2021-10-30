import infracoesService from '../../../services/infracoes_service'

export default async function Infracoes(req, res) {
  const { codigo } = req.query
  const infracao = await infracoesService.getInfracaoByCodigo(codigo)
  return res.json(infracao)
}