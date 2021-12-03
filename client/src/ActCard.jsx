import React, { useState, useEffect, useContext } from 'react';
import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppContext from './AppContext';



const ActCard = (props) => {

  const title = props.title;
  const desc = props.desc;
  const duration = props.duration;
  let groupsize = '';
  if (props.groupsize){
    groupsize = 'Groups of ' + props.groupsize;
  }
  const category = props.category.toUpperCase();

  return (
   <Card style={{height: '100%'}}>
     <div className="mui--text-headline" style={{background: '#18ffff'}}>{category}</div>
     <div className="mui--text-title" style={{marginTop: '4px'}}>{title}</div>
     <div className="mui--text-body1" style={{maxHeight: '100px', overflow: 'scroll', marginTop: '4px'}}>{desc}</div>
     <span className="cardFooter" style={{marginTop: '8px'}}>
       <div className="mui--text-caption">{duration}</div>
       <div className="mui--text-caption">{groupsize || ''}</div>
     </span>
   </Card>
  );
};

export default ActCard;