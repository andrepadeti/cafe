import React, { useState } from 'react'

import Title from './title'
import Fade from 'react-reveal/Fade'
import Carousel from './carousel'
import Container from './container'

const Food = () => {
  return (
    <Fade>
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
    </Fade>
  )
}

const Drinks = () => {
  return (
    <Fade>
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

      <h5>Água</h5>
      <p>Com ou sem gás 3.00</p>
    </Fade>
  )
}

const Menu = () => {
  const [food, setFood] = useState(true)

  return (
    <>
      <Container id="menu">
        <Title text="Menu" />

        <div
          className="btn-group d-flex"
          role="group"
          aria-label="Menu Cardápio"
        >
          <button
            type="button"
            className={`btn ${food ? 'btn-primary text-white' : 'btn-background'}`}
            aria-pressed="true"
            onClick={() => setFood(true)}
            onKeyPress={e => e.value === 'Enter' && setFood(true)}
          >
            Comidas
          </button>
          <button
            type="button"
            className={`btn ${food ? 'btn-background' : 'btn-primary text-white'}`}
            onClick={() => setFood(false)}
            onKeyPress={e => e.value === 'Enter' && setFood(false)}
          >
            Bebidas
          </button>
        </div>
        <div className="p-4 mb-5 text-center">
          {food ? <Food /> : <Drinks />}
        </div>

        <Fade>
          <Carousel />
        </Fade>
      </Container>
    </>
  )
}

export default Menu
