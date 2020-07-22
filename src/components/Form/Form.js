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
    return (
      <div>
        <Collapsible>
          <Design />
        </Collapsible>
        <Collapsible>
          <Fill />
        </Collapsible>
        <Collapsible>
          <Share />
        </Collapsible>
      </div>
    );
  }
}

export default Form;
