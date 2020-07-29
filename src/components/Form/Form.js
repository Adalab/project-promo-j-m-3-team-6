import React from 'react';
// import Collapsible from './Collapsible';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.collapsibleHandler = this.collapsibleHandler.bind(this);
    this.state = { isOpen: 'collapsible-1' };
    /*we store the clicked collapsible in state with a default as the first collapsible to be open on page load*/
  }
  collapsibleHandler(ev) {
    /*this opens the clicked collapsible*/
    if (ev.currentTarget.id !== this.state.activeCollapsible) {
      this.setState({ isOpen: ev.currentTarget.id });
    } else {
      /*this closes the clicked collapsible*/
      this.setState({ isOpen: '' });
    }
  }

  render() {
    return (
      <form className="form">
        <Design
          id="collapsible-1"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
        />

        <Fill
          id="collapsible-2"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
        />

        <Share
          id="collapsible-3"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
        />
      </form>
    );
  }
}

export default Form;
