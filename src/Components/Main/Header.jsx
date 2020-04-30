import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'
import Btnlog from '../Main/Btnlog'
export default function () {
  return (
    <React.Fragment>
      <header className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/" id="brand">ACAD-PRO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio </a>
              </li>
              <Link activeClass="active" to="cadastro" spy={true} smooth={true} duration={500} className="nav-item" >
                <a className="nav-link" href="#">Cadastro Academia</a>
              </Link>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" >
                    Pacotes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Gratuito</a>
                  <a className="dropdown-item" href="#">Pro</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Completo</a>
                </div>
              </li>

            </ul>
            <div className="redes_sociais  ">
              <a href="/face"></a>
              <a href="/inst"></a>
              <a href="/youtube"></a>
              <a href="/twi"></a>
            </div>
            <Btnlog></Btnlog>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}