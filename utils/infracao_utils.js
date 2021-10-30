export default {
  formatCodigoInfracao (codigo, desdobramento) {
    const codigoString = `${codigo}${Number(desdobramento)}`
    const formatedCodigo = codigoString.replace(/(\d{3})(\d+)/g, '$1-$2')
    return formatedCodigo
  }
}