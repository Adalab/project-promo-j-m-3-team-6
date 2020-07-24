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
  collapsibleHandler() {
    console.log('collapse me');
  }
  render() {
    console.log('Form');
    console.log(this.props);

    return (
      <form className="form">
        <Design collapsibleHandler={this.collapsibleHandler} />

        <Fill collapsibleHandler={this.collapsibleHandler} />

        <Share clickHandler={this.props.clickHandler} />
      </form>
    );
  }
}

export default Form;
