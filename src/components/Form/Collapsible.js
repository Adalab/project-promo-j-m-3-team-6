import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="collapsible">{this.props.children}</div>;
  }
}

export default Collapsible;
