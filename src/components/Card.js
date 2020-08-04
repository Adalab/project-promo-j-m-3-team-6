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
    this.resetAll = this.resetAll.bind(this);

    this.state = {
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      },
    };
    this.initialState = this.state;
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
      const newProfile = { ...profile, avatar: img };

      return {
        profile: newProfile,
        photo: img,
        isAvatarDefault: false,
      };
    });
    console.log(this.state);
  }

  //RESET ALL
  resetAll() {
    this.setState(this.initialState);
  }

  render() {
    console.log(this.props);
    const { profile, isAvatarDefault } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <div className="wrapper">
            <PreviewCard
              objectInfo={this.state}
              avatar={profile.avatar}
              resetAll={this.resetAll}
            />
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
