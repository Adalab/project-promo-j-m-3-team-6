import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/card" component={Card}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
