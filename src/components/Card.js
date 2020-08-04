import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';
import defaultImage from './Preview-Card/defaultImage';
import GetData from './services/GetData';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.objectHandler = this.objectHandler.bind(this);
    this.validateInfo = this.validateInfo.bind(this);
    this.state = {
      objectInfo: {
        palette: '1',
        name: '',
        job: '',
        email: '',
        phone: '',
        linkedin: '',
        github: '',
        photo: '',
      },
      isAvatarDefault: true,
      profile: {
        avatar: defaultImage,
      },
    };
  }
  // componentDidMount(){
  // GetData.fetchData().then(responseData{this.setState})
  // }
  validateInfo() {
    console.log(this.state.objectInfo);
    const { name, job, email, linkedin, github, photo } = this.state.objectInfo;
    if (name && job && email && linkedin && github && photo) {
      return '';
    } else {
      return 'disabled';
    }
  }

  /* function that updates state with input values*/
  objectHandler(event) {
    const { value, id } = event.currentTarget;
    this.setState((prevState) => {
      return { objectInfo: { ...prevState.objectInfo, [id]: value } };
    });
    console.log(this.state);
  }
  updateAvatar(img) {
    /* reworked this because photo was not being properly updated before and the data was not getting to validation point upon clicking on comparte*/
    const { profile, objectInfo } = this.state;
    this.setState((prevState) => {
      const newProfile = { ...profile, avatar: img };
      /*photo was being put in the wrong spot!*/
      const newObjectInfo = { ...objectInfo, photo: img };
      return {
        profile: newProfile,
        isAvatarDefault: false,
        objectInfo: newObjectInfo,
      };
    });
    console.log(this.state);
  }

  render() {
    const { profile, isAvatarDefault } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <div className="wrapper">
            <PreviewCard objectInfo={this.state} avatar={profile.avatar} />
            <Form
              validateInfo={this.validateInfo}
              objectHandler={this.objectHandler}
              objectInfo={this.state.objectInfo}
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
