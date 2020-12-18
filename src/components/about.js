import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Fade from 'react-reveal/Fade'
import Title from './title'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "coffeeshop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className="container mb-5" id="about">
      <div className="row">
        <div className="col-11 col-md-8 mx-auto py-2 bg-light rounded shadow">
          <Title text="Quem Somos" />
          <p className="text-justify">
            O Soderinni Gourmet nasceu para trazer aos Campestrinos o melhor
            café da cidade. Aqui você vai encontrar um espaço agradável para
            relaxar, encontrar os amigos e fazer uma pausa no home office em um
            lugar aconchegante.
          </p>
          <p className="text-justify">
            Nosso buffet também organiza festas, corporativos, casamentos,
            almoços, jantares, finger food, coffee break, doces finos, bem
            casados e gifts para eventos.
          </p>
          <div className="leftbar p-3 mb-5">
            <blockquote className="blockquote text-center">
              <p>
                <em>
                  "Todos os produtos do nosso café são produzidos aqui."
                </em>
              </p>
              <footer className="blockquote-footer text-center">
                <cite>Milena Sodero.</cite> Especialista em café.
              </footer>
            </blockquote>
          </div>
          <Fade>
            <Img fluid={data.about.childImageSharp.fluid} className="mb-3" />
          </Fade>
          <p>
            <strong>Nosso horário:</strong> terça à sexta das 12h às 20h, sábado e domingo das 8h às 16h.
            <br />
            <strong>Endereço:</strong> Vitória Régia, 1409.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
