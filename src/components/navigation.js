import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navigation = () => {
  return (
    <div className="position-absolute top-0">
      <ul
        className="nav justify-content-center text-white py-3"
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
            className="nav-link mx-md-6 mx-lg-7"
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
    </div>
  )
}

export default Navigation
