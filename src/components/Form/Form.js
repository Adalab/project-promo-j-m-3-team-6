import React from 'react';
import Collapsible from './Collapsible';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Form');
    console.log(this.props);
    return (
      <div>
        <Collapsible>
          <Design />
        </Collapsible>
        <Collapsible>
          <Fill />
        </Collapsible>
        <Collapsible>
          <Share clickHandler={this.props.clickHandler} />
        </Collapsible>
      </div>
    );
  }
}

export default Form;
