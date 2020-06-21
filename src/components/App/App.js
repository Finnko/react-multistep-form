import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {PathName} from '../../const';
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
  );
}

export default App;
