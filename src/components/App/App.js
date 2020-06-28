import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PathName} from '../../const';
import {store} from '../../store/store';
import {WelcomeScreen} from '../WelcomeScreen/WelcomeScreen';
import {Intro} from '../Intro/Intro';
import {About} from '../About/About';
import {Location} from '../Location/Location';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={PathName.ROOT}>
            <WelcomeScreen />
          </Route>
          <Route path={PathName.INTRO}>
            <Intro />
          </Route>
          <Route path={PathName.ABOUT}>
            {({match}) => (
                <About match={match}/>
            )}
          </Route>
          <Route path={PathName.LOCATION}>
            {({match}) => (
                <Location match={match}/>
            )}
          </Route>
        </Switch>
      </Router>
    </Provider>
  );


}

export default App;
