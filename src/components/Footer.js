import React from 'react';
import Logo from '../images/Logo-Gryffincode.png';
import '../stylesheets/layout/_footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__copy">
            <p>Awesome profile-cards &copy; 2020 Gryffincode</p>
          </div>
          <div className="footer__wrapper__logo">
            <img
              className="footer__wrapper__logo__img"
              src={Logo}
              alt="Logo Equipo"
            />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
