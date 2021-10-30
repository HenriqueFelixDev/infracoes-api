import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import InfracaoCard from '../components/infracao_card'
import AppBar from '../components/appbar'
import LoadingSpinner from '../components/loading_spinner'
import InfracoesService from '../services/infracoes_service'
import Footer from '../components/footer'

export default function Infracoes() {
  let [infracoes, setInfracoes] = useState([])
  let [isLoading, setIsLoading] = useState(false)
  let [limit, setLimit] = useState(15)

  useEffect(() => {
    setIsLoading(true)
    InfracoesService.getInfracoes()
      .then(setInfracoes)
      .finally(() => setIsLoading(false))
  }, [])

  const onLoadMore = () => {
    const newLimit = Math.min(infracoes.length, limit + 15)
    setLimit(newLimit)
  }

  return (
    <div>
      <Head>
        <title>Infrações API - Infrações</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <AppBar />
      <Container>
        <h2 className="my-3">
          Lista de infrações
        </h2>
        {
          isLoading &&
          <div className="text-center;">
            <LoadingSpinner />
          </div>
        }
        { 
          infracoes.map(infracao => {
            return <InfracaoCard infracao={infracao} 
              key={infracao.codigo + infracao.desdobramento} />
          }).slice(0, limit)
        }
        {
          limit < infracoes.length &&
          <div className="my-3 text-center">
            <button className="btn btn-primary"
              onClick={onLoadMore}>
              Carregar Mais
            </button>
          </div>
        }
      </Container>
      <Footer />
    </div>
  )
}