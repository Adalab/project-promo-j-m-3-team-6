import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.objectHandler = this.objectHandler.bind(this);
    this.state = {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    };
  }
  objectHandler(event) {
    console.log(event.currentTarget.value);
    const value = event.currentTarget.value;
    const stateAttribute = event.currentTarget.id;
    const newState = {};

    newState[stateAttribute] = value;
    console.log(newState);
    this.setState(newState);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <main className="main">
          <div className="wrapper">
            <PreviewCard objectInfo={this.state} />
            <Form objectHandler={this.objectHandler} objectInfo={this.state} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Card;
