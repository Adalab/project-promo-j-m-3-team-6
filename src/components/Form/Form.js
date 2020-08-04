import React from 'react';
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
    console.log(this.props);
    return (
      <form className="form">
        <Design
          id="collapsible-1"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
          objectHandler={this.props.objectHandler}
          objectInfo={this.props.objectInfo}
        />

        <Fill
          id="collapsible-2"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
          objectHandler={this.props.objectHandler}
          objectInfo={this.props.objectInfo}
          avatar={this.props.avatar}
          isAvatarDefault={this.props.isAvatarDefault}
          updateAvatar={this.props.updateAvatar}
        />

        <Share
          fetchInfo={this.props.fetchInfo}
          validateInfo={this.props.validateInfo}
          id="collapsible-3"
          collapsibleHandler={this.collapsibleHandler}
          isOpen={this.state.isOpen}
          objectHandler={this.props.objectHandler}
          objectInfo={this.props.objectInfo}
        />
      </form>
    );
  }
}

export default Form;
