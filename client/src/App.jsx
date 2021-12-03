import React, { useState, useEffect } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'

import AppContext from './AppContext.js';

import ActForm from './ActForm.jsx';
import CardView from './CardView.jsx';

const App = () => {

  const [activities, setActivities] = useState();

  useEffect(() => {
    fetch('/activities')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setActivities(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [activities]);

  if (!activities) {
    return <Appbar><div className="mui--text-caption">Loading the STEM LAB...</div></Appbar>;
  }
  return (
    <AppContext.Provider value={{activities}}>
    <div>
      <Appbar>
        <div className="mui--text-display2">steMVP <FontAwesomeIcon icon={faSeedling} /></div>
        <div className="mui--text-subhead"><FontAwesomeIcon icon={faMicroscope} style={{marginRight: "8px"}}/>About</div>
      </Appbar>
      <ActForm />
      <CardView />
    </div>
    </AppContext.Provider>
  );
};

export default App;