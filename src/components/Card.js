import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import '../stylesheets/_App.scss';
import defaultImage from './Preview-Card/defaultImage';
import { GetData } from './services/GetData';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.objectHandler = this.objectHandler.bind(this);
    this.validateInfo = this.validateInfo.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this);
    this.setURL = this.setURL.bind(this);
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
    this.initialState = this.state;
  }
  fetchInfo() {
    const json = this.state.objectInfo;
    GetData(json)
      .then((result) => this.setURL(result))
      .catch((error) => this.handleError(error));
    this.setState({
      isLoading: true,
    });
  }

  setURL(result) {
    if (result.success) {
      this.setState({
        cardSuccess: true,
        cardURL: result.cardURL,
        isLoading: false,
      });
    } else {
      this.setState({
        cardSuccess: false,
        isLoading: false,
      });
    }
    console.log(this.state.cardURL);
  }

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

  //RESET ALL
  resetAll() {
    this.setState(this.initialState);
  }

  render() {
    const { profile, isAvatarDefault, objectInfo } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <div className="wrapper">
            <PreviewCard
              objectInfo={objectInfo}
              avatar={profile.avatar}
              resetAll={this.resetAll}
            />
            <Form
              fetchInfo={this.fetchInfo}
              validateInfo={this.validateInfo}
              objectHandler={this.objectHandler}
              objectInfo={objectInfo}
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
