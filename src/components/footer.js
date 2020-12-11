import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="container-fluid p-0">
      <div className="row py-3 px-5 justify-content-center align-items-center bg-dark text-white">
        <div className="col-md-4 col-sm-12 text-center text-md-left mb-4 mb-md-0">
          <h5 className="mb-0">Siga-nos nas mídias sociais!</h5>
        </div>
        <div className="col-md-4 col-sm-12 text-center text-md-left pl-md-5">
          <a href="https://www.facebook.com" className="mr-4">
            <FontAwesomeIcon icon={['fab', 'facebook']} size="3x" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
          </a>
        </div>
      </div>

      <div className="row pt-3 bg-secondary text-white justify-content-center">
        <div className="col-md-4 col-sm-12 pl-5 mb-4 mb-md-0">
          <h5 className='handwriting'>Café Campestre</h5>
          <hr style={{ width: '60px' }} />
          <p>O melhor café da cidade bem pertinho de você.</p>
        </div>

        <div className="col-md-4 col-sm-12 pl-5">
          <h5>Contato</h5>
          <hr style={{ width: '60px' }} />
          <p>
            <FontAwesomeIcon icon={['fa', 'building']} className="mr-2" />
            Rua Vitória Régia, 1300 - 09080-320
          </p>
          <p>
            <a href="mailto:cafe@gmail.com" style={{}}>
              <FontAwesomeIcon icon={['fa', 'envelope']} className="mr-2" />
              cafe@gmail.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={['fa', 'phone']} className="mr-2" />
            (11) 4404.4404
          </p>
        </div>
      </div>

      <div className="row py-3 bg-dark text-white">
        <div className="column d-flex justify-content-center">
          <div>
            Copyright &#169; {new Date().getFullYear()}
            <a href="mailto:andrepadeti@hotmail.com">
              <FontAwesomeIcon icon={['fa', 'envelope']} className="mx-2" />
              André Padeti
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
