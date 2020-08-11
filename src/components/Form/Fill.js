import React from 'react';
import GetAvatar from '../Preview-Card/GetAvatar';

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
    this.objectHandlerChild = this.objectHandlerChild.bind(this);
  }

  clickHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
  }
  objectHandlerChild(event) {
    this.props.objectHandler(event);
  }

  render() {
    const { name, job, phone, email, github, linkedin } = this.props.objectInfo;
    return (
      <div className="fillOut">
        <div
          className="fillOut__title"
          id={this.props.id}
          onClick={this.clickHandlerChild}
        >
          <div className="content__title">
            <i className="fa fa-keyboard-o" aria-hidden="true"></i>
            <h2 className="text">Rellena</h2>
          </div>
          <i
            className={`fa fa-chevron-down ${
              this.props.isOpen === this.props.id ? '' : 'transform'
            }`}
            aria-hidden="true"
          ></i>
        </div>
        <div
          className={`fillOut__form ${
            this.props.isOpen === this.props.id ? '' : 'hidden'
          }`}
        >
          <div className="item">
            <label htmlFor="name">
              Nombre completo *
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej: Hermione Granger"
                required
                onChange={this.objectHandlerChild}
                value={name}
              />
            </label>
          </div>
          <div className="item">
            <label htmlFor="job">
              Puesto *
              <input
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Wizard"
                onChange={this.objectHandlerChild}
                required
                value={job}
              />
            </label>
          </div>
          <div className="item">
            <label htmlFor="img-selector">
              Imagen de perfil *
              <div className="fillOut-image">
                <GetAvatar
                  objectInfo={this.props.objectInfo}
                  photo={this.props.photo}
                  avatar={this.props.avatar}
                  isAvatarDefault={this.props.isAvatarDefault}
                  updateAvatar={this.props.updateAvatar}
                />
              </div>
            </label>
          </div>
          <div className="item">
            <label htmlFor="phone">
              Teléfono
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 123456789"
                pattern="[0-9]{9}"
                onChange={this.objectHandlerChild}
                value={phone}
              />
            </label>
          </div>
          <div className="item">
            <label htmlFor="email">
              Email *
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ej: la-hermi@gmail.com"
                onChange={this.objectHandlerChild}
                required
                value={email}
              />
            </label>
          </div>
          <div className="item">
            <label htmlFor="linkedin">
              Linkedin *
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                placeholder="Ej: hermione.granger"
                onChange={this.objectHandlerChild}
                required
                value={linkedin}
              />
            </label>
          </div>
          <div className="item">
            <label htmlFor="github">
              Github *
              <input
                type="text"
                id="github"
                name="github"
                placeholder="Ej: hermione-granger"
                onChange={this.objectHandlerChild}
                required
                value={github}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Fill;
