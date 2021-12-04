import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "./AppContext";
import ActCard from "./ActCard.jsx";

const CardView = () => {
  const context = useContext(AppContext);
  const activities = context.activities;
  const scale = context.scale;
  const setScale = context.setScale;

  useEffect(() => {
    if (!scale) {
      setScale(12);
    }
  }, [scale]);

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="space-around" spacing={3}>
        {activities.map((activity) => (
          <Grid key={activity.activity_id} item xs={scale}>
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
