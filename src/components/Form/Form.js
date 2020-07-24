import React from 'react';
// import Collapsible from './Collapsible';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleHandler = this.collapsibleHandler.bind(this);
  }
  collapsibleHandler(currentCollapsible) {
    console.log(currentCollapsible);
    // const arrowsTransform = document.querySelectorAll('.js-arrowsTransform');
    const collapsibleContent = document.querySelectorAll('.js-hidden');

    collapsibleContent.forEach((collapsible) => {
      collapsible.classList.add('hidden');
    });
    currentCollapsible.nextSibling.classList.remove('hidden');
    // falta hacer lo de las flechas que funcionan algo parecido
    // arrowsTransform.forEach((arrow) => arrow.classList.toggle('transform'));
  }
  render() {
    console.log('Form');
    console.log(this.props);

    return (
      <form className="form">
        <Design collapsibleHandler={this.collapsibleHandler} />

        <Fill collapsibleHandler={this.collapsibleHandler} />

        <Share
          collapsibleHandler={this.collapsibleHandler}
          clickHandler={this.props.clickHandler}
        />
      </form>
    );
  }
}

export default Form;
