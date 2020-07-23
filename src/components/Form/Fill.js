import React from 'react';

class Fill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='fillOut'>
        <div className='fillOut__title js-arrow2'>
          <div className='content__title'>
            <i className='fa fa-keyboard-o' aria-hidden='true'></i>
            <h2 className='text'>Rellena</h2>
          </div>
          <i
            className='fa fa-chevron-down js-arrowTransform2'
            aria-hidden='true'
          ></i>
        </div>
        <div className='fillOut__form js-hidden2 hidden'>
          <div className='item'>
            <label htmlFor='name'>
              Nombre completo
              <input
                type='text'
                className='js-input-name'
                id='name'
                name='name'
                placeholder='Ej: Jon Nieve'
                required
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='job'>
              Puesto
              <input
                type='text'
                className='js-input-job'
                id='job'
                name='job'
                placeholder='Ej: Night guard'
                required
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='img-selector'>
              Imagen de perfil
              <div className='fillOut-image'>
                <div className='action'>
                  <button
                    className='action__upload-btn js__profile-trigger'
                    type='button'
                  >
                    Añadir imagen
                  </button>
                  <input
                    type='file'
                    name=''
                    id='img-selector'
                    className='action__hiddenField js__profile-upload-btn'
                  />
                </div>
                <div className='profile'>
                  <div className='profile__preview js__profile-preview'></div>
                </div>
              </div>
            </label>
          </div>
          <div className='item'>
            <label htmlFor='email'>
              Email
              <input
                type='email'
                className='js-input-mail'
                id='email'
                name='email'
                placeholder='Ej: jon-nieve@gmail.com'
                required
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='phone'>
              Teléfono
              <input
                type='tel'
                className='js-input-phone'
                id='phone'
                name='phone'
                placeholder='Ej: 123456789'
                pattern='[0-9]{9}'
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='linkedin'>
              Linkedin
              <input
                type='text'
                className='js-input-linkedin'
                id='linkedin'
                name='linkedin'
                placeholder='Ej: jon.nieve'
                required
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='github'>
              Github
              <input
                type='text'
                className='js-input-github'
                id='github'
                name='github'
                placeholder='Ej: jon-nieve'
                required
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Fill;
