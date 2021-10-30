const infracoesRepository = require('../../repositories/infracoes_repository')

const getInfracoes = () => infracoesRepository.getInfracoes()

const getInfracaoByCodigo = codigo => infracoesRepository.getInfracaoByCodigo(codigo)

module.exports = {
  getInfracoes,
  getInfracaoByCodigo
}