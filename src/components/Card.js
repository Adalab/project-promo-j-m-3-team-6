import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';

class Card extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <div className="wrapper">
            <PreviewCard />
            <Form />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Card;
