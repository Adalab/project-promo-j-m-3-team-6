import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import '../stylesheets/App.scss';
import Landing from './Landing';
//import '../stylesheets/Landing.scss';
import Card from './Card';

class AppLanding extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/card" component={Card}></Route>
        </Switch>
        FOOOOOOOOTER
      </div>
    );
  }
}

export default AppLanding;
