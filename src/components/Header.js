import React from 'react';
import headerLogo from '../images/logo-awesome-profile-cards.svg';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.goldenModeHandlerChild = this.goldenModeHandlerChild.bind(this);
  }
  goldenModeHandlerChild() {
    this.props.goldenModeHandler();
  }

  render() {
    console.log(this.props);
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
        <div className='header__button__container'>
          <h3>Golden Mode</h3>

          <div
            href='#'
            className={`header__button__container--slider golden-${
              this.props.isGolden ? 'active' : 'off'
            }`}
          >
            <div
              className='header__button__container--slider-circle'
              onClick={this.goldenModeHandlerChild}
            ></div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
