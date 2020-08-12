import React from 'react';
import Logo from '../images/golden-logo.png';
import { Link } from 'react-router-dom';
import audio from '../audio/goldengirls.mp3';
import ReactAudioPlayer from 'react-audio-player';

class LandingMain extends React.Component {
  render() {
    return (
      <main className='main-landing'>
        <div className='main_img'>
          <img src={Logo} alt='logo-awesome-profile-cards' />
        </div>
        <h1>Crea tu tarjeta de visita</h1>
        <p>
          <span>
            Crea mejores contactos profesionales de forma fácil y cómoda
          </span>
        </p>
        <article className='steps-landing'>
          <div>
            <span className='icon-landing'>
              <i className='fa fa-object-ungroup' aria-hidden='true'></i>
            </span>
            <span className='text-landing'>Diseña</span>
          </div>
          <div>
            <span className='icon-landing'>
              <i className='fa fa-keyboard-o' aria-hidden='true'></i>
            </span>
            <span className='text-landing'>Rellena</span>
          </div>
          <div>
            <span className='icon-landing'>
              <i className='fa fa-share-alt' aria-hidden='true'></i>
            </span>
            <span className='text-landing'>Comparte</span>
          </div>
        </article>
        <Link to={'/card'} className='button-start' title='start'>
          COMENZAR
        </Link>
        <div key='1' className='song'>
          <ReactAudioPlayer controls autoPlay src={audio} />
        </div>
      </main>
    );
  }
}

export default LandingMain;
