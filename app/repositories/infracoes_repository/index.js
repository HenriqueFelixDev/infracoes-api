const infracoes = require('../../database/data/infracoes.json')

const getInfracoes = () => Promise.resolve(infracoes)

const getInfracaoByCodigo = codigoParam => {
  const codigo = codigoParam.substring(0, 4)
  const desdobramento = codigoParam.substring(4).padStart(2, '0')

  const filteredInfracoes =  infracoes.filter(infracao => 
    infracao.codigo == codigo &&  infracao.desdobramento == desdobramento)

  return Promise.resolve(filteredInfracoes)
} 

module.exports = {
  getInfracoes,
  getInfracaoByCodigo
}