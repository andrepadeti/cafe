import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Navigation from './navigation'

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
    <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
      <Navigation />
      <div className="hero d-flex justify-content-center justify-content-sm-between mb-5">
        <div className="hours opaque text-white m-3 align-self-end d-none d-sm-block">
          Aberto das 6 às 17
        </div>
        <div className="title text-white text-center align-self-center">
          <Zoom>Café</Zoom>
          <Zoom>Campestre</Zoom>
        </div>
        <div className="address opaque text-white m-3 align-self-end d-none d-sm-block">
          Rua Vitória Régia, 1300
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
