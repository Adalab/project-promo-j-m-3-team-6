import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
    this.fetchInfoChild = this.fetchInfoChild.bind(this);
  }

  clickHandlerChild(ev) {
    this.props.collapsibleHandler(ev);
    this.props.validateInfo();
  }
  fetchInfoChild(ev) {
    ev.preventDefault();
    this.props.fetchInfo();
  }

  render() {
    const activateButton = this.props.validateInfo();
    const cardURL = this.props.stateData.cardURL;
    const tweet = 'Aquí tienes tu tarjeta Griffyncode:';

    return (
      <div className='box__share'>
        <div
          className='share__menu js-arrow'
          id={this.props.id}
          onClick={this.clickHandlerChild}
        >
          <div className='content__title'>
            <i className='icon fas fa-share-alt'></i>
            <h2 className='titleMenu'>comparte</h2>
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
            type='submit'
            // name='share'
            value='share'
            className={`share__content__button js-share ${activateButton}`}
            onClick={this.fetchInfoChild}
          >
            <i className='far fa-address-card'></i>
            <span>CREAR TARJETA</span>
          </button>
        </div>
        <div
          className={`text__share js-textShare ${
            this.props.stateData.cardSuccess === true ? '' : 'hidden'
          }`}
        >
          <h5 className='text__share__create'>La tarjeta ha sido creada:</h5>
          <a className='text__share__link js-linkShare' href={cardURL}>
            {cardURL}
          </a>
          <a
            href={`http://twitter.com/share?text=${tweet}&url=${cardURL}`}
            alt='Tu tarjeta para compartir'
          >
            <button
              className='twitter-share-button text__share__button'
              data-size='large'
              data-text='custom share text'
              data-url='https://dev.twitter.com/web/tweet-button'
              data-hashtags='example,demo'
              data-via='Adalab_Digital'
              data-related='twitterapi,twitter'
            >
              <i className='fab fa-twitter'></i>

              <span>Compartir en twitter</span>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Share;
