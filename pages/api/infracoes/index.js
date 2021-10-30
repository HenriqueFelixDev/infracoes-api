import infracoesService from '../../../services/infracoes_service'

export default async function Infracoes(req, res) {
  const infracoes = await infracoesService.getInfracoes()
  return res.json(infracoes)
}