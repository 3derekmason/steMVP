import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  NativeSelect,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faGripLines,
  faGripVertical,
  faBug,
  faDna,
  faFish,
  faFilter,
  faLeaf,
  faMusic,
  faPaintBrush,
  faSignLanguage,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import ActivityModal from "./ActivityModal.jsx";
import AddActForm from "./AddActForm.jsx";
import AppContext from "./AppContext.js";

const categoryData = [
  ["art", faPaintBrush, "#C2185B", "#FCE4EC"],
  ["bugs", faBug, "#AFB42B", "#F9FBE7"],
  ["dinosaurs", faDna, "#00796B", "#E0F2F1"],
  ["music", faMusic, "#E64A19", "#FBE9E7"],
  ["nature", faLeaf, "#388E3C", "#E8F5E9"],
  ["ocean", faFish, "#303F9F", "#E8EAF6"],
  ["sensory", faSignLanguage, "#7B1FA2", "#F3E5F5"],
  ["space", faUserAstronaut, "#512DA8", "#EDE7F6"],
];

const ActForm = () => {
  const context = useContext(AppContext);
  const activities = context.activities;
  const activityModal = useRef(null);
  const scale = context.scale;
  const setScale = context.setScale;
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCount, setCurrentCount] = useState();

  const handleChange = (category) => {
    const filterString = category[0];
    fetch(`/activities/category=${filterString}`)
      .then((res) => res.json())
      .then((data) => {
        context.setActivities(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const closeForm = () => {
    activityModal.current.close();
  };

  const getCount = () => {
    fetch(`/activities`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentCount(data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <>
      <Card id="actform" style={{ padding: "16px" }}>
        <div className="filter" style={{ width: "66%" }}>
          <div className="view">
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setScale(12);
              }}
            >
              <FontAwesomeIcon icon={faGripLines} />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setScale(6);
              }}
            >
              <FontAwesomeIcon icon={faGripVertical} />
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                setScale(4);
              }}
            >
              <FontAwesomeIcon icon={faGripHorizontal} />
            </Button>
          </div>
          <div className="iconBar">
            <span
              className="chooseAllIcon"
              style={{ marginRight: "8px" }}
              onClick={(e) => {
                e.preventDefault();
                fetch("/activities")
                  .then((res) => res.json())
                  .then((data) => {
                    context.setActivities(data);
                  });
              }}
            >
              <FontAwesomeIcon
                key={Math.random()}
                icon={faFilter}
                size={"2x"}
              />
            </span>
            {categoryData.map((category) => (
              <span
                className="chooseCategoryIcon"
                onClick={(e) => {
                  e.preventDefault();
                  handleChange(category);
                }}
              >
                <FontAwesomeIcon
                  key={Math.random()}
                  icon={category[1]}
                  size={"3x"}
                />
              </span>
            ))}
          </div>
        </div>
        <div className="buttons" style={{ width: "33%" }}>
          <Button
            variant="contained"
            style={{
              background: "#00838f",
              color: "#ffffff",
              marginTop: "20px",
            }}
            onClick={() => {
              activityModal.current.open();
            }}
          >
            Add Activity
          </Button>
          <Button
            style={{ color: "#00838f" }}
            onClick={(e) => {
              e.preventDefault();
              const saveCount = currentCount;
              fetch("/activities")
                .then((res) => res.json())
                .then((data) => {
                  const randomAct = [];
                  const randomIndex = Math.floor(Math.random() * data.length);
                  randomAct.push(data[randomIndex]);
                  context.setActivities(randomAct);
                });
            }}
          >
            RANDOM ACTIVITY
          </Button>
        </div>
      </Card>
      <ActivityModal ref={activityModal}>
        <AddActForm pass={activityModal} close={closeForm} />
      </ActivityModal>
    </>
  );
};

export default ActForm;
