import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import scrollTo from 'gatsby-plugin-smoothscroll'

const ScrollUp = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    scrollTo('#navigation')
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <FontAwesomeIcon
          className="scroll-up"
          icon={['fa', 'chevron-circle-up']}
          size="4x"
          onClick={handleClick}
          onKeyPress={e => (e.value = 'Enter' ? handleClick : null)}
          aria-label="subir ao topo da página"
          tabIndex={0}
        />
      )}
    </div>
  )
}
export default ScrollUp
