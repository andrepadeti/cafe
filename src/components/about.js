import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
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
        <div className="col-md-8 mx-auto">
          <Slide>
            <Title text="QUEM SOMOS" />
          </Slide>
          <p>
            O Café Campestre nasceu para trazer aos Campestrinos o melhor café
            da cidade. Aqui você vai encontrar um espaço agradável para relaxar,
            encontrar amigos e fazer home office de um lugar aconchegante.
          </p>
          <p>
            Além do nosso delicioso exclusivo Espresso Campestre e outros
            excelentes cafés, nós também servimos café da manhã e sanduíches
            feitos na hora, e também temos uma seleção de saladas e outras
            coisinhas bem gostosas.
          </p>
          <div className="leftbar">
            <blockquote className="blockquote">
              <p>
                <em>
                  "Minha maior preocupação é oferecer produtos frescos. Frescor
                  é o novo açucar."
                </em>
              </p>
              <footer className="blockquote-footer">
                <cite>Paulo Almeida.</cite> Especialista em café e dono.
              </footer>
            </blockquote>
          </div>
          <Fade>
            <Img fluid={data.about.childImageSharp.fluid} className='mb-3' />
          </Fade>
          <p>
            <strong>Nosso horário:</strong> diariamente das 6 às 17.
            <br />
            <strong>Endereço:</strong> Vitória Régia, 1300.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
