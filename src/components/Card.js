import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';
import defaultImage from './Preview-Card/defaultImage';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.objectHandler = this.objectHandler.bind(this);
    this.state = {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      image: {
        isAvatarDefault: true,
        profile: {
          avatar: defaultImage,
        },
      },
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
  updateAvatar(img) {
    const { profile } = this.state;
    this.setState((prevState) => {
      return {
        photo: img,
      };
    });
    console.log(this.state);
  }

  render() {
    console.log(this.props);
    const { profile, isAvatarDefault } = this.state.image;
    return (
      <div>
        <Header />
        <main className='main'>
          <div className='wrapper'>
            <PreviewCard objectInfo={this.state} avatar={profile.avatar} />
            <Form
              objectHandler={this.objectHandler}
              objectInfo={this.state}
              avatar={profile.avatar}
              isAvatarDefault={isAvatarDefault}
              updateAvatar={this.updateAvatar}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Card;
