import React, { useState } from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Title from './title'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Food = () => {
  return (
    <>
      <h5>Cesta de pães</h5>
      <p>Variedade de pães de fruta frescos e bolinhos 14.50</p>

      <h5>Granola</h5>
      <p>Granola com mel, amendoas e frutas 7.00</p>

      <h5>Waffle</h5>
      <p>Waffle de baunilha com farinha maltada 7.50</p>

      <h5>Ovos mexidos</h5>
      <p>Ovos mexidos, pimenta e alho, com cebola 7.50</p>

      <h5>Panqueca</h5>
      <p>Panqueca de morango com muuuitos morangos 8.50</p>
    </>
  )
}

const Drinks = () => {
  return (
    <>
      <h5>Café</h5>
      <p>Cafézinho 2.50</p>

      <h5>Chocolato</h5>
      <p>Espresso de chocolate com leite 4.50</p>

      <h5>Corretto</h5>
      <p>Whiskey e café 5.00</p>

      <h5>Chá gelado</h5>
      <p>Chá quente, só que gelado 3.00</p>

      <h5>Refrigerante</h5>
      <p>Coca-cola, Sprite, Fanta, etc. 2.50</p>
    </>
  )
}

const Menu = () => {
  const [food, setFood] = useState(true)

  const data = useStaticQuery(graphql`
    query MyQuery {
      menu: file(relativePath: { eq: "coffeehouse2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="container mb-5" id="menu">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <Slide>
              <Title text="MENU" />
            </Slide>

            <div className="card">
              <div
                className="btn-group"
                role="group"
                aria-label="Menu Cardápio"
              >
                <button
                  type="button"
                  className={`btn ${food ? 'btn-secondary' : 'btn-light'}`}
                  aria-pressed="true"
                  onClick={() => setFood(true)}
                  onKeyDown={() => setFood(true)}
                >
                  Comidas
                </button>
                <button
                  type="button"
                  className={`btn ${food ? 'btn-light' : 'btn-secondary'}`}
                  onClick={() => setFood(false)}
                  onKeyDown={() => setFood(false)}
                >
                  Bebidas
                </button>
              </div>
            </div>
            <div className="shadow p-4 mb-5">
              {food ? <Food /> : <Drinks />}
            </div>
            <Fade>
              <Img fluid={data.menu.childImageSharp.fluid} />
            </Fade>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
