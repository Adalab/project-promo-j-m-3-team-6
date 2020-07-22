import React from 'react';
import Footer from './Footer';
import LandingMain from './LandingMain';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LandingMain />
        <Footer />
      </div>
    );
  }
}

export default Landing;
