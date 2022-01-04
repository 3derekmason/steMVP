import React, { useState, useEffect, useContext } from "react";
import { Card, CardActionArea } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "./AppContext";
import {
  faBug,
  faDna,
  faFish,
  faLeaf,
  faMusic,
  faPaintBrush,
  faSignLanguage,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

const categoryData = {
  art: [faPaintBrush, "#C2185B", "#FCE4EC"],
  bugs: [faBug, "#AFB42B", "#F9FBE7"],
  dinosaurs: [faDna, "#00796B", "#E0F2F1"],
  music: [faMusic, "#E64A19", "#FBE9E7"],
  nature: [faLeaf, "#388E3C", "#E8F5E9"],
  ocean: [faFish, "#303F9F", "#E8EAF6"],
  sensory: [faSignLanguage, "#7B1FA2", "#F3E5F5"],
  space: [faUserAstronaut, "#512DA8", "#EDE7F6"],
};

const ActCard = (props) => {
  const title = props.title;
  const desc = props.desc;
  const duration = props.duration;
  let groupsize = "";
  if (props.groupsize) {
    groupsize = "Groups of " + props.groupsize;
  }
  const category = props.category.toUpperCase();
  const icon = categoryData[props.category][0];
  const banner = categoryData[props.category][1];
  const tile = categoryData[props.category][2];

  const editActivity = (title) => {
    const toRemove = title;
    fetch(`/activities/title/?title=${toRemove}`, {
      method: "delete",
    });
  };

  return (
    <Card
      style={{
        width: "100%",
        height: "100%",
        background: tile,
        padiding: "16px",
      }}
    >
      <CardActionArea>
        <div className="cardBanner" style={{ background: banner }}>
          <span style={{ marginLeft: "12px", color: tile }}>
            <FontAwesomeIcon icon={icon} />
          </span>
          <div
            className="mui--text-subhead"
            style={{ marginRight: "20px", color: tile }}
          >
            {category}
          </div>
        </div>
        <div className="tileBody">
          <div
            className="mui--text-headline"
            style={{ marginTop: "4px", fontVariant: "small-caps" }}
          >
            {title}
          </div>
          <div
            className="mui--text-body1"
            style={{
              minHeight: "80px",
              overflow: "scroll",
              marginTop: "4px",
              paddingLeft: "8px",
              paddingRight: "8px",
              fontVariant: "small-caps",
            }}
          >
            {desc}
          </div>
          <div
            className="cardFooter"
            style={{
              marginTop: "8px",
              marginBottom: "4px",
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          >
            <div className="mui--text-caption">{duration}</div>
            <p onClick={editActivity(title)}>X</p>
            <div className="mui--text-caption">{groupsize || ""}</div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ActCard;
