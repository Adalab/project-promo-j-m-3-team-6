import React from 'react';
import headerLogo from '../images/logo-awesome-profile-cards.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__logo'>
          <Link to={'/'} title='start'>
            <img
              className='header__logo--img'
              src={headerLogo}
              alt='Awesome profile-cards'
            />
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
