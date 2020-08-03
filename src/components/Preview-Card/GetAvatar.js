import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener('load', this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : {};
  }

  render() {
    console.log(this.props);
    //hemos conseguido traer la función de uploadphoto pero tenemos que revisar clases y nombres de los componentes copiados
    const { isAvatarDefault, avatar } = this.props;
    return (
      <div className='get-avatar'>
        <button
          className='get-avatar__trigger'
          type='button'
          onClick={this.handleFilePicker}
        >
          Añadir imagen
        </button>

        <input
          type='file'
          ref={this.myFileField}
          className='get-avatar__upload-field'
          onChange={this.uploadImage}
        />

        <div
          className='get-avatar__preview'
          style={this.getPreview(isAvatarDefault, avatar)}
        ></div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
