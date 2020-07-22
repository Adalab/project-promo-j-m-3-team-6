import React from 'react';
import headerLogo from '../images/logo-awesome-profile-cards.svg';
import '../stylesheets/layout/_header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <a href="./index.html">
            <img
              className="header__logo--img"
              src={headerLogo}
              alt="Awesome profile-cards"
            />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
