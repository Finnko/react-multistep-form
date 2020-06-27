import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PathName} from '../../const';
import {store} from '../../store/store';
import {Intro} from '../Intro/Intro';
import {About} from '../About/About';

import './App.css';

function App() {
  const [step, setStep] = useState(0);

  const handleClick = (type) => {
    if (type === 'next') {
      setStep(step + 1);
    } else {
      setStep(step - 1);
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={PathName['0']}>
            <Intro nextStep={step + 1} onButtonClick={handleClick}/>
          </Route>
          <Route path={PathName['1']}>
            <About prevStep={step - 1} nextStep={step + 1} onButtonClick={handleClick}/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );


}

export default App;
