import React, { useState, useEffect, useRef } from "react";
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
// import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'
import ActivityModal from "./ActivityModal.jsx";
import AddActForm from "./AddActForm.jsx";

const ActForm = () => {
  const activityModal = useRef(null);

  const [currentCategory, setCurrentCategory] = useState();
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const closeForm = () => {
    activityModal.current.close();
  };
  return (
    <>
      <Card id="actform">
        <div className="filter" style={{ width: "66%" }}>
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
          <Button style={{ color: "#00838f" }}>RANDOM ACTIVITY</Button>
        </div>
      </Card>
      <ActivityModal ref={activityModal}>
        <AddActForm pass={activityModal} close={closeForm} />
      </ActivityModal>
    </>
  );
};

export default ActForm;
