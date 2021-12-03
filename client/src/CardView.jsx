import React, { useState, useEffect } from 'react';
import { Container, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'

const CardView = () => {
  return (
      <Container id="cardview">
        <div className="mui--text-caption">Cards for each db Activity will be displayed here</div>
        <Card>
          <div className="mui--text-title">{activities}</div>
        </Card>
      </Container>
  );
};

export default CardView;