import React, { useState, useEffect, useContext } from 'react';
import { Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'
import AppContext from './AppContext';

const CardView = () => {
  const context = useContext(AppContext);
  const activities = context.activities;

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
       <Grid container justifyContent="center" spacing={2}>
         {activities.map((value) => (
           <Grid key={value.activity_id} item xs={6}>
             <Card>
               <div className="mui--text-title">
                {JSON.stringify(value)}
               </div>
               </Card>
           </Grid>
         ))}
       </Grid>
     </Grid>
   </Grid>
  );
};

export default CardView;