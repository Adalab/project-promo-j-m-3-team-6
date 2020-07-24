import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default Collapsible;
