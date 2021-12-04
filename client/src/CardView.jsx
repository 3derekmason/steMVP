import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'
import AppContext from "./AppContext";
import ActCard from "./ActCard.jsx";

const CardView = () => {
  const context = useContext(AppContext);
  const activities = context.activities;

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="space-around" spacing={3}>
        {activities.map((activity) => (
          <Grid key={activity.activity_id} item xs={6}>
            <ActCard
              title={activity.title}
              desc={activity.description}
              duration={activity.length}
              groupsize={activity.group_size}
              category={activity.category}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardView;
