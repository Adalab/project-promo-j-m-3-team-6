import React from 'react';
// import Collapsible from './Collapsible';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleHandler = this.collapsibleHandler.bind(this);
    this.arrowHandler = this.arrowHandler.bind(this);
  }
  collapsibleHandler(currentCollapsible) {
    // console.log(currentCollapsible);

    const collapsibleContent = document.querySelectorAll('.js-hidden');

    collapsibleContent.forEach((collapsible) => {
      collapsible.classList.add('hidden');
    });
    currentCollapsible.nextSibling.classList.remove('hidden');
  }

  arrowHandler(currentArrow) {
    console.log('current arrow', currentArrow);
    const arrowsTransform = document.querySelectorAll('.js-arrowsTransform');
    console.log('arrowsTransform', arrowsTransform);
    // falta hacer lo de las flechas que funcionan algo parecido
    arrowsTransform.forEach((arrow) => {
      arrow.classList.add('transform');
      console.log(arrow);
    });
    currentArrow.lastChild.classList.remove('transform');
    console.log(currentArrow.lastChild);
  }

  render() {
    return (
      <form className='form'>
        <Design
          collapsibleHandler={this.collapsibleHandler}
          arrowHandler={this.arrowHandler}
        />

        <Fill
          collapsibleHandler={this.collapsibleHandler}
          arrowHandler={this.arrowHandler}
        />

        <Share
          collapsibleHandler={this.collapsibleHandler}
          arrowHandler={this.arrowHandler}
        />
      </form>
    );
  }
}

export default Form;
