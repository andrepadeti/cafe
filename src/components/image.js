/**
 * This component loads all images from the images folder,
 * then you only need to import this component and use it like this:
 * <Image fileName="xxx.jpg" alt="" />
 * No need to do a graphql query for each image.
 */

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ fileName, alt = '', style }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const fluid = allImageSharp.nodes.find(n => n.fluid.originalName === fileName)
    .fluid

  return (
    <figure>
      <Img fluid={fluid} alt={alt} style={style} />
    </figure>
  )
}

export default Image
