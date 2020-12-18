import React from 'react'

import '../styles/global.scss'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Menu from '../components/menu'
import Where from '../components/where'
import Footer from '../components/footer'
// import ScrollUp from '../components/scrollUp'

// font awesome initialization
import { library } from '@fortawesome/fontawesome-svg-core'
// import {
//   faFacebookSquare,
//   faInstagramSquare,
// } from '@fortawesome/free-brands-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faHeartBroken,
  faEnvelope,
  faBuilding,
  faPhone,
  faArrowUp,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faCoffee,
  faHeartBroken,
  faEnvelope,
  faBuilding,
  faPhone,
  faArrowUp,
  faChevronCircleUp,
  fab
)

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Festas | Corporativos | Aniversários | Casamentos | Almoços | Jantares | Finger Food | Coffee Break | Doces Finos | Bem Casados | Gifts para Eventos"
      />
      <Fade>
        <Hero /> {/*includes navigation bar*/}
        <About />
        <Menu />
        <Where />
      </Fade>
      <Footer />
      {/* <ScrollUp showBelow={250} /> */}
    </>
  )
}

export default Home
