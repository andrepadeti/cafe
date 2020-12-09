import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <a className="navbar-brand" href="#home">
        Café Campestre
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span
              className="nav-link cursor-pointer"
              onClick={() => scrollTo('#home')}
              onKeyPress={e => (e.key === 'Enter' ? scrollTo('#home') : null)}
              role="button"
              tabIndex={0}
            >
              Home
            </span>
          </li>
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
              className="nav-link"
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
    </nav>
  )
}

export default Navigation
