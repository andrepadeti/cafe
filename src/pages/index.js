import React from 'react'

import '../styles/global.scss'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import Menu from '../components/menu'
import Where from '../components/where'
import Footer from '../components/footer'

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
} from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faHeartBroken, faEnvelope, faBuilding, faPhone, fab)

const Home = () => {
  return (
    <>
      <SEO
        title="Café Campestre"
        description="O melhor café da cidade bem pertinho de você"
      />
      <Fade>
        <Hero /> {/*includes navigation bar*/}
        <About />
        <Menu />
        <Where />
      </Fade>
      <Footer />
    </>
  )
}

export default Home
