import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
      <div className="hero">
        <div className="hours">Aberto das 6 às 17</div>

        <div className="title text-white text-center display-1">
          <Zoom>Café</Zoom>
          <Zoom>Campestre</Zoom>
        </div>
        <div className="address">Rua Vitória Régia, 1300</div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
