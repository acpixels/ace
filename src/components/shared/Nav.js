import React from 'react';
import {Link} from 'react-router-dom';
import ace from './../../img/ace.png'

const Nav = () => {

  return (<nav className="navbar navbar-expand-lg navbar-light bg-primary bg-dark">
    <a className="navbar-brand primary" href="#">ANNE ERVIN</a>
    {/* <img src={ace} width="30" height="30" alt=""/>ANNE ERVIN</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto d-flex justify-content-between">
        <li className="nav-item active">
          <a className="nav-link text-white" href="#">Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>

      </ul>
    </div>

  </nav>);
}

export default Nav;
