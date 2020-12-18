import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navigation = () => {
  return (
    <ul
      className="nav justify-content-center opaque text-white"
      id="navigation"
    >
      <li className="nav-item cursor-pointer">
        <span
          className="nav-link"
          onClick={() => scrollTo('#about')}
          onKeyPress={e => (e.key === 'Enter' ? scrollTo('#about') : null)}
          role="button"
          tabIndex={0}
        >
          Quem somos
        </span>
      </li>
      <li className="nav-item cursor-pointer">
        <span
          className="nav-link mx-md-5"
          onClick={() => scrollTo('#menu')}
          onKeyPress={e => (e.key === 'Enter' ? scrollTo('#menu') : null)}
          role="button"
          tabIndex={0}
        >
          Menu
        </span>
      </li>
      <li className="nav-item cursor-pointer">
        <span
          className="nav-link"
          onClick={() => scrollTo('#where')}
          onKeyPress={e => (e.key === 'Enter' ? scrollTo('#where') : null)}
          role="button"
          tabIndex={0}
        >
          Localização
        </span>
      </li>
    </ul>
  )
}

export default Navigation
