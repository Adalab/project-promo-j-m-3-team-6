import React from 'react';
import Footer from './Footer';
import LandingMain from './LandingMain';

class Landing extends React.Component {
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
