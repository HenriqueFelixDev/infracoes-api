module.exports = function (req, res, next) {
  // Mantém o cache por 15 dias
  res.setHeader('Cache-Control', 's-max-age=1296000, stale-while-revalidate')
  next()
}