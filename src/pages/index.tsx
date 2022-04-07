import type { NextPage } from 'next'
import Head from 'next/head'
import SectionHeader from 'modules/SectionHeader'
import SectionGroup from 'modules/SectionGroup'
import SectionValues from 'modules/SectionValues'
import SectionVacancies from 'modules/SectionVacancies'

const Home: NextPage = () => {
  return (
    <html lang="pt-br">
      <Head>
        <title>Elo7 | Technical Interaction</title>
        <meta name="Elo7" content="Technical Interaction Elo7" />
        <link rel="icon" href="/images/favicon/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Interação Técnica Elo7" />
        <meta name="keywords" content="Elo7, Vagas, Tecnologia" />
        <meta name="author" content="Thiago Almeida" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SectionHeader />
      <SectionGroup />
      <SectionValues />
      <SectionVacancies />
    </html>
  )
}

export default Home
