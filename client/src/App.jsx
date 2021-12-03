import React, { useState, useEffect } from 'react';
import Appbar from 'muicss/lib/react/appbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'

const App = () => {

  return (
      <Appbar>
        <div className="mui--text-display2">steMVP <FontAwesomeIcon icon={faSeedling} /></div>
        <div className="mui--text-subhead"><FontAwesomeIcon icon={faMicroscope} style={{marginRight: "8px"}}/>About</div>
      </Appbar>
  );
};

export default App;