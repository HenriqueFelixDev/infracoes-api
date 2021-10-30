const infracoes = require('../../database/data/infracoes.json')

const getInfracoes = () => Promise.resolve(infracoes)

const getInfracaoByCodigo = codigoParam => {
  const sanitizedCodigo = codigoParam.replace(/\D/g, '')
  const codigo = sanitizedCodigo.substring(0, 4)
  const desdobramento = sanitizedCodigo.substring(4).padStart(2, '0')

  const filteredInfracoes =  infracoes.filter(infracao => 
    infracao.codigo == codigo &&  infracao.desdobramento == desdobramento)

  return Promise.resolve(filteredInfracoes)
} 

module.exports = {
  getInfracoes,
  getInfracaoByCodigo
}