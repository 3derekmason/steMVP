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
} from "@fortawesome/free-solid-svg-icons";
import ActivityModal from "./ActivityModal.jsx";
import AddActForm from "./AddActForm.jsx";
import AppContext from "./AppContext.js";

const ActForm = () => {
  const context = useContext(AppContext);
  const activities = context.activities;
  const activityModal = useRef(null);
  const scale = context.scale;
  const setScale = context.setScale;
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCount, setCurrentCount] = useState();

  const handleChange = (e) => {
    const filterString = e.target.value.toLowerCase();
    fetch(`http://localhost:7676/activities/category?category=${filterString}`)
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
    fetch(`http://localhost:7676/activities`)
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
          <FormControl>
            <InputLabel htmlFor="category-native-helper">Category</InputLabel>
            <NativeSelect
              value={""}
              onChange={handleChange}
              inputProps={{
                name: "category",
                id: "category-native-helper",
              }}
            >
              <option aria-label="None" value="" />
              <option>Art</option>
              <option>Bugs</option>
              <option>Dinosaurs</option>
              <option>Music</option>
              <option>Nature</option>
              <option>Ocean</option>
              <option>Sensory</option>
              <option>Space</option>
            </NativeSelect>
            <FormHelperText>Filter by category</FormHelperText>
          </FormControl>
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
              fetch("http://localhost:7676/activities")
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
