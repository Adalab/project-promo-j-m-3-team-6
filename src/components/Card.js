import React from 'react';
import Form from './Form/Form';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './Preview-Card/PreviewCard';
import defaultImage from './Preview-Card/defaultImage';
import { GetData } from './services/GetData';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.objectHandler = this.objectHandler.bind(this);
    this.validateInfo = this.validateInfo.bind(this);
    this.hideMessage = this.hideMessage.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this);
    this.setURL = this.setURL.bind(this);
    this.goldenModeHandler = this.goldenModeHandler.bind(this);
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
      isGolden: false,
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

  componentDidMount() {
    const saveObject = JSON.parse(localStorage.getItem('saveObject'));
    const saveAvatar = JSON.parse(localStorage.getItem('saveAvatar'));
    const saveProfile = JSON.parse(localStorage.getItem('saveProfile'));
    const saveGolden = JSON.parse(localStorage.getItem('saveGolden'));
    if (saveObject) {
      this.setState({
        objectInfo: saveObject,
        isAvatarDefault: saveAvatar,
        profile: saveProfile,
        isGolden: saveGolden,
      });
    }
  }
  componentDidUpdate() {
    const saveObject = this.state.objectInfo;
    localStorage.setItem('saveObject', JSON.stringify(saveObject));
    const saveAvatar = this.state.isAvatarDefault;
    localStorage.setItem('saveAvatar', JSON.stringify(saveAvatar));
    const saveProfile = this.state.profile;
    localStorage.setItem('saveProfile', JSON.stringify(saveProfile));
    localStorage.setItem('saveGolden', JSON.stringify(this.state.isGolden));
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
  }

  validateInfo() {
    const { name, job, email, linkedin, github, photo } = this.state.objectInfo;
    if (name && job && email && linkedin && github && photo) {
      return '';
    } else {
      return 'disabled';
    }
  }

  hideMessage() {
    const { name, job, email, linkedin, github, photo } = this.state.objectInfo;
    if (name && job && email && linkedin && github && photo) {
      return 'hidden';
    } else {
      return '';
    }
  }

  /* function that updates state with input values*/
  objectHandler(event) {
    const { value, id } = event.currentTarget;
    this.setState((prevState) => {
      return { objectInfo: { ...prevState.objectInfo, [id]: value } };
    });
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
  }

  //RESET ALL
  resetAll() {
    this.setState(this.initialState);
  }

  //golden mode
  goldenModeHandler() {
    console.log('clicked button');
    if (this.state.isGolden) {
      this.setState({ isGolden: false });
      return 'off';
    } else {
      this.setState({ isGolden: true });
      return 'active';
    }
  }

  render() {
    const { profile, isAvatarDefault, objectInfo } = this.state;
    return (
      <div>
        <Header
          goldenModeHandler={this.goldenModeHandler}
          isGolden={this.state.isGolden}
        />
        <main className={`main ${this.state.isGolden ? 'golden' : ''}`}>
          <div className='wrapper'>
            <PreviewCard
              objectInfo={objectInfo}
              avatar={profile.avatar}
              resetAll={this.resetAll}
              isGolden={this.state.isGolden}
            />
            <Form
              fetchInfo={this.fetchInfo}
              validateInfo={this.validateInfo}
              hideMessage={this.hideMessage}
              objectHandler={this.objectHandler}
              objectInfo={objectInfo}
              avatar={profile.avatar}
              isAvatarDefault={isAvatarDefault}
              updateAvatar={this.updateAvatar}
              stateData={this.state}
              isGolden={this.state.isGolden}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Card;
