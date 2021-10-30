import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import InfracaoUtils from '../../utils/infracao_utils'
import StringUtils from '../../utils/string_utils'

export default function InfracaoCard({infracao, ...props}) {
  const codigoFormatado = InfracaoUtils.formatCodigoInfracao(infracao.codigo, infracao.desdobramento)
  
  return (
    <article className="card p-4 mt-2" key={props.key}>
      <header>
        <div className="d-flex flex-row justify-content-between">
          <h3 className="card-title" title={`Código ${codigoFormatado}`}>
            { codigoFormatado }
          </h3>
          <div className="text-warning font-weight-bold">
            { infracao.infrator }
          </div>
        </div>
        <div className="card-subtitle text-muted"
          title={`Artigo ${infracao.artigo}`}>
          <FontAwesomeIcon icon={faGavel} height="16px" className="mb-1" /> { infracao.artigo }
        </div>
      </header>
      <p className="card-body mt-2">
        { infracao.infracao }
      </p>
      <footer>
        <div className="d-inline-block text-danger mr-3 font-weight-bold">
          { infracao.pontuacao }
          &nbsp;
          { StringUtils.getSingularOrPlural(infracao.pontuacao, 'ponto') }
        </div>
        <div className="d-inline-block text-danger font-weight-bold">
          { 
            infracao.valor.toLocaleString(
              'pt-BR', { 
                currency: 'BRL', 
                maximumFractionDigits: 2, 
                minimumFractionDigits: 2,
                style: 'currency'
              }
            )
          }
        </div>
      </footer>
    </article>
  )
}