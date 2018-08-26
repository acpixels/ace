import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<footer className="bg-primary">
    <div className="container-fluid">
      <p className="text-white font-weight-light">Copyright &#169; {currentYear}
        &nbsp; Anne Ervin
      </p>
    </div>
  </footer>);
}

export default Footer;
