import React    from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-fluid bg-secondary">
        <p className="text-white font-weight-light">Copyright &#169; {currentYear} Anne Ervin </p>
      </div>
    </footer>
  );
}

export default Footer;
