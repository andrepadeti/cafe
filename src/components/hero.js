import React from 'react'
import Zoom from 'react-reveal/Zoom'
import coffee from '../images/cafe.svg'
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
    <BackgroundImage
      fluid={data.hero.childImageSharp.fluid}
      className="hero__bg-img"
    >
      <div className="hero d-flex flex-column align-items-center justify-content-center position-relative w-100 h-100">
        <Navigation />
        <Zoom>
          <div className="d-flex flex-column flex-lg-row align-items-lg-baseline align-items-center hero__title handwriting text-white">
            <div className="lh-1 order-lg-0">Café</div>
            <img
              src={coffee}
              width="100"
              height="100"
              className="hero__title-img mx-5 order-first order-lg-1 mb-3"
              alt="coffee icon"
            />
            <div className="lh-1 order-lg-2">Campestre</div>
          </div>
        </Zoom>
        <div className="hero__hours text-white m-3 d-none d-lg-block">
          Terça à Sexta das 12 às 20
          <br />
          Sábado e Domingo das 8 às 16
        </div>
        <div className="hero__address text-white m-3 d-none d-lg-block">
          Rua Vitória Régia, 402
          <br />
          Santo André
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
