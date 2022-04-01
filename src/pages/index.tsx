import type { NextPage } from 'next'
import Head from 'next/head'
import SectionHeader from 'modules/SectionHeader'
import SectionGroup from 'modules/SectionGroup'
import SectionValues from 'modules/SectionValues'
import SectionVacancies from 'modules/SectionVacancies'

const Home: NextPage = () => {
  return (
    <>
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
      </Head>
      <SectionHeader />
      <SectionGroup />
      <SectionValues />
      <SectionVacancies />
    </>
  )
}

export default Home
