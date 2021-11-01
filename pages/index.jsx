import Head from 'next/head'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import InfracaoCard from '../components/infracao_card'
import LoadingSpinner from '../components/loading_spinner'
import AppBar from '../components/appbar'
import Footer from '../components/footer'
import InfracoesService from '../services/infracoes_service'

export default function Home() {
  let [search, setSearch] = useState("")
  let [infracao, setInfracao] = useState(null)
  let [isLoading, setIsLoading] = useState(false)

  const searchInfracao = codigo => {
    setIsLoading(true)
    
    InfracoesService.getInfracaoByCodigo(codigo)
      .then(infracao => setInfracao(infracao[0]))
      .finally(() => setIsLoading(false))
  }

  const changeSearchText = (evt) => setSearch(evt.target.value)

  const onInfracaoSearch = () => {
    if (search) searchInfracao(search)
  }

  return (
    <div>
      <AppBar />
      <div>
        <Head>
          <title>Infrações API</title>
          <link rel="icon" href="/favicon-32x32.png" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1906352345780833"
     crossorigin="anonymous"></script>
        </Head>

        <div className="d-flex h-100 align-items-center justify-content-center" 
          style={{minHeight: '90vh'}}>
          <Container className="md-container">
            <section className="mt-5 m-auto" style={{maxWidth: '500px'}}>
              <h2 className="text-center text-md-left">Consulte as infrações do DETRAN</h2>
              <div className="text-center my-4">
                <img className="w-100" src="/traffic.jpeg" />
              </div>
              <div>
                <form>
                  <input type="number" 
                    className="form-control"
                    placeholder="Código da infração"
                    onChange={changeSearchText}
                    value={search} />
                  <button type="button" className="btn btn-primary w-100 mt-1"
                    onClick={onInfracaoSearch}>
                    Consultar
                  </button>
                </form>
              </div>
              { 
                isLoading &&
                <LoadingSpinner className="mt-5" />
              }
              { 
                infracao && !isLoading &&
                <InfracaoCard infracao={infracao} />
              }
            </section>
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  )
}
