import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import '../stylesheets/_App.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Card;
