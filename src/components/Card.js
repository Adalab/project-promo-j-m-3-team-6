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
      palette: '',
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
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <main className='main'>
          <div className='wrapper'>
            <PreviewCard />
            <Form objectHandler={this.objectHandler} objectInfo={this.state} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Card;
