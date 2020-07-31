import React from 'react';
import GetAvatar from '../Preview-Card/GetAvatar';

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
    this.objectHandlerChild = this.objectHandlerChild.bind(this);
    this.uploadPhotoChild = this.uploadPhotoChild.bind(this);
  }

  clickHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
  }
  objectHandlerChild(event) {
    this.props.objectHandler(event);
  }

  uploadPhotoChild(ev) {
    this.props.uploadPhoto(ev);
  }

  render() {
    console.log(this.props);
    return (
      <div className='fillOut'>
        <div
          className='fillOut__title js-arrow'
          id={this.props.id}
          onClick={this.clickHandlerChild}
        >
          <div className='content__title'>
            <i className='fa fa-keyboard-o' aria-hidden='true'></i>
            <h2 className='text'>Rellena</h2>
          </div>
          <i
            className={`fa fa-chevron-down js-arrowsTransform ${
              this.props.isOpen === this.props.id ? '' : 'transform'
            }`}
            aria-hidden='true'
          ></i>
        </div>
        <div
          className={`fillOut__form js-hidden ${
            this.props.isOpen === this.props.id ? '' : 'hidden'
          }`}
        >
          <div className='item'>
            <label htmlFor='name'>
              Nombre completo
              <input
                type='text'
                className='js-input-name'
                id='name'
                name='name'
                placeholder='Ej: Hermione Granger'
                required
                onChange={this.objectHandlerChild}
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
                placeholder='Ej: Wizard'
                onChange={this.objectHandlerChild}
                required
              />
            </label>
          </div>
          <div className='item'>
            <label htmlFor='img-selector'>
              Imagen de perfil
              <div className='fillOut-image'>
                <GetAvatar
                  photo={this.props.objectInfo.photo}
                  uploadPhoto={this.props.uploadPhoto}
                />
                {/* <div className='action'>
                  <button
                    className='action__upload-btn js__profile-trigger'
                    type='button'
                    onClick={this.uploadPhotoChild}
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
                </div>*/}
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
                placeholder='Ej: la-hermi@gmail.com'
                onChange={this.objectHandlerChild}
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
                onChange={this.objectHandlerChild}
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
                placeholder='Ej: hermione.granger'
                onChange={this.objectHandlerChild}
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
                placeholder='Ej: hermione-granger'
                onChange={this.objectHandlerChild}
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
