import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
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
        // <div className="scroll-up backdrop-filter">
          <FontAwesomeIcon
          className="scroll-up"
            icon={['fa', 'chevron-circle-up']}
            size="4x"
            onClick={handleClick}
            onKeyPress={e => (e.value = 'Enter' ? handleClick : null)}
            aria-label="to top"
          />
        // </div>
      )}
    </div>
  )
}
export default ScrollUp
