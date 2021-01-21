import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Navigation from './navigation'
// import Headroom from 'react-headroom'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.hero.childImageSharp.fluid}
      className="hero-img"
    >
      {/* <Headroom> */}
      <Navigation />
      {/* </Headroom> */}
      <div className="hero d-flex justify-content-center justify-content-lg-between mb-5">
        <div className="hours opaque text-white m-3 align-self-end d-none d-lg-block rounded">
          Terça à Sexta das 12 às 20
          <br />
          Sábado e Domingo das 8 às 16
        </div>
        <div className="title handwriting text-white text-center align-self-center opaque px-3 rounded">
          <Zoom>Soderinni</Zoom>
          <Zoom>Gourmet</Zoom>
        </div>
        <div className="address opaque text-white m-3 align-self-end d-none d-lg-block rounded">
          Rua Vitória Régia, 1409
          <br />
          Santo André
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
