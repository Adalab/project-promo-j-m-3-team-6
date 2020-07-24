import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.getClick = this.getClick.bind(this);
  }

  getClick(evt) {
    console.log('he hecho click', evt);
  }

  render() {
    return (
      <div>
        <Header />
        <Form clickHandler={this.getClick} />
        <PreviewCard />
        <Footer />
      </div>
    );
  }
}

export default Card;
