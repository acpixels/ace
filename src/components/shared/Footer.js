import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<footer>
    <div className="container-fluid">
      <div className="row pt-4">
        <div className="col-lg-4 col-sm-12">&nbsp;</div>
        <div className="col-lg-4 col-sm-12">
          <p className="primary text-uppercase">Copyright &#169; {currentYear}
            &nbsp; Anne Ervin
          </p>
        </div>
        <div className="col-lg-4 col-sm-12">
          <ul className="list-unstyled list-inline text-md-right text-sm-center">
            <li className="list-inline-item">
              <a href="https://github.com/acpixels" target="_blank">
                <i className="fab fa-github fa-2x text-dark"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="http://www.linkedin.com/in/anne-ervin" target="_blank">
                <i className="fab fa-linkedin fa-2x text-dark"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:anne.ervin@me.com">
                <i className="fas fa-at fa-2x text-dark"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>);
}

export default Footer;
