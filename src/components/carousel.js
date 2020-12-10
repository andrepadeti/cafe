import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      food1: file(relativePath: { eq: "food1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      food2: file(relativePath: { eq: "food2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      food3: file(relativePath: { eq: "food3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div id="foodCarousel" className="carousel slide " data-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-target="#foodCarousel"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#foodCarousel" data-slide-to="1"></li>
        <li data-target="#foodCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" style={{ height: '80vh' }}>
        <div className="carousel-item h-100 active">
          <Img fluid={data.food1.childImageSharp.fluid} className="img-fluid" />
          <div class="carousel-caption d-none d-md-block backdrop-filter pb-2 px-0 mb-4">
            <h5>Campestre Exclusivo</h5>
            <p>Bolo de chocolate com o exclusivo Café Campestre</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <Img fluid={data.food2.childImageSharp.fluid} />
          <div class="carousel-caption d-none d-md-block backdrop-filter pb-2 px-0 mb-4">
            <h5>Croissant Campestre</h5>
            <p>Delicioso croissant com queijo brie</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <Img fluid={data.food3.childImageSharp.fluid} className="img-fluid" />
          <div class="carousel-caption d-none d-md-block backdrop-filter pb-2 px-0 mb-4">
            <h5>Talharim Clássico</h5>
            <p>Talharim com tomates frescos</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#foodCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#foodCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default Carousel
