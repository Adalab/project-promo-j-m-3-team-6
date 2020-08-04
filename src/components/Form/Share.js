import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
  }

  clickHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
    this.props.validateInfo();
  }

  render() {
    const activateButton = this.props.validateInfo();
    console.log(this.props.objectInfo);
    return (
      <div className="box__share">
        <div
          className="share__menu js-arrow"
          id={this.props.id}
          onClick={this.clickHandlerChild}
        >
          <div className="content__title">
            <i className="icon fas fa-share-alt"></i>
            <h2 className="titleMenu">comparte</h2>
          </div>
          <i
            className={`fa fa-chevron-down js-arrowsTransform ${
              this.props.isOpen === this.props.id ? '' : 'transform'
            }`}
          ></i>
        </div>
        <div
          className={`share__content js-hidden ${
            this.props.isOpen === this.props.id ? '' : 'hidden'
          }`}
        >
          <button
            type="submit"
            name="share"
            value="share"
            className={`share__content__button js-share ${activateButton}`}
          >
            <i className="far fa-address-card"></i>
            <span>CREAR TARJETA</span>
          </button>
        </div>
        <div className="text__share js-textShare">
          <h5 className="text__share__create hidden">
            La tarjeta ha sido creada:
          </h5>
          <button
            className="text__share__link js-linkShare"
            href="#"
            target="_blank"
          ></button>
          <button
            className="twitter-share-button text__share__button js-twitter hidden"
            href="https://twitter.com/share?="
            data-size="large"
            data-text="custom share text"
            data-url="https://dev.twitter.com/web/tweet-button"
            data-hashtags="example,demo"
            data-via="Adalab_Digital"
            data-related="twitterapi,twitter"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
            <span>Compartir en twitter</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Share;
