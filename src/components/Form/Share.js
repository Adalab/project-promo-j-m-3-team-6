import React from 'react';

class Share extends React.Component {
  constructor(props) {
    super(props);
    // this.getClickChild = this.getClickChild.bind(this);
    this.clickHandlerChild = this.clickHandlerChild.bind(this);
  }
  // ejemplo de maría
  // getClickChild(evt) {
  //   this.props.clickHandler(evt.target);
  // }
  clickHandlerChild(event) {
    this.props.collapsibleHandler(event.currentTarget);
    this.props.arrowHandler(event.currentTarget);
    console.log(event);
  }

  render() {
    console.log(this.props);
    return (
      <div className='box__share'>
        <div className='share__menu js-arrow' onClick={this.clickHandlerChild}>
          <div className='content__title'>
            <i className='icon fas fa-share-alt'></i>
            <h2 className='titleMenu'>comparte</h2>
          </div>
          <i className='fa fa-chevron-down js-arrowsTransform transform'></i>
        </div>
        <div className='share__content js-hidden hidden'>
          <button
            type='submit'
            name='share'
            value='share'
            className='share__content__button js-share disabled'
            onClick={this.getClickChild}
          >
            <i className='far fa-address-card'></i>
            <span>CREAR TARJETA</span>
          </button>
        </div>
        <div className='text__share js-textShare'>
          <h5 className='text__share__create hidden'>
            La tarjeta ha sido creada:
          </h5>
          <button
            className='text__share__link js-linkShare'
            href='#'
            target='_blank'
          ></button>
          <button
            className='twitter-share-button text__share__button js-twitter hidden'
            href='https://twitter.com/share?='
            data-size='large'
            data-text='custom share text'
            data-url='https://dev.twitter.com/web/tweet-button'
            data-hashtags='example,demo'
            data-via='Adalab_Digital'
            data-related='twitterapi,twitter'
            target='_blank'
          >
            <i className='fab fa-twitter'></i>
            <span>Compartir en twitter</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Share;
