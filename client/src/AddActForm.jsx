import React, { useState, useEffect, useContext, useRef } from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  NativeSelect,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faDna,
  faFish,
  faLeaf,
  faMusic,
  faPaintBrush,
  faPen,
  faSeedling,
  faSignLanguage,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";

import AppContext from "./AppContext.js";
import ActivityModal from "./ActivityModal.jsx";

const AddActForm = (props) => {
  const context = useContext(AppContext);
  const activities = context.activities;
  const handleActivityChange = context.handleActivityChange;

  const activityModal = useRef(null);
  const defaultValues = {
    title: "",
    description: "",
    duration: "",
    groupSize: "",
    category: "",
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const categoryData = [
    [faPaintBrush, "#C2185B", "art"],
    [faBug, "#AFB42B", "bugs"],
    [faDna, "#00796B", "dinosaurs"],
    [faMusic, "#E64A19", "music"],
    [faLeaf, "#388E3C", "nature"],
    [faFish, "#303F9F", "ocean"],
    [faSignLanguage, "#7B1FA2", "sensory"],
    [faUserAstronaut, "#512DA8", "space"],
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivityData = {
      title: formValues.title,
      description: formValues.description,
      duration: formValues.duration,
      group_size: formValues.groupSize,
      category: formValues.category,
    };
    setFormValues(defaultValues);
    props.close();
    fetch("http://localhost:7676/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivityData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Card style={{ padding: "16px", background: "#ECEFF1" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "#00838F",
          marginBottom: "#20px",
        }}
      >
        <FontAwesomeIcon icon={faSeedling} size="3x" />
        <div className="mui--text-headline">Add a new activity!</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div id="formTitle">
          <TextField
            id="title-input"
            key={Math.random()}
            name="title"
            label="Activity Title"
            type="text"
            required
            value={formValues.title}
            onChange={handleInputChange}
          />
          <FontAwesomeIcon
            icon={faPen}
            size="4x"
            style={{ color: "#00bcd4" }}
            spin
          />
        </div>
        <div id="categoryFormTop">
          <div id="attributes">
            <TextField
              id="groupsize-input"
              key={Math.random}
              name="groupSize"
              label="Group Size"
              placeholder="Ex: 3-4"
              type="text"
              value={formValues.groupSize}
              onChange={handleInputChange}
            />
            <TextField
              id="duration-input"
              key={Math.random()}
              name="duration"
              label="Duration"
              placeholder="Ex: 5-10 minutes"
              type="text"
              required
              value={formValues.duration}
              onChange={handleInputChange}
            />
            <TextField
              id="title-input"
              key={Math.random()}
              name="description"
              label="Description"
              type="text"
              required
              value={formValues.description}
              multiline
              minRows={8}
              maxRows={10}
              fullWidth
              onChange={handleInputChange}
            />
          </div>

          <div id="categoryList">
            <FormControl>
              <FormLabel>Category</FormLabel>
              <RadioGroup
                name="category"
                key={Math.random()}
                required
                value={formValues.category}
                onChange={handleInputChange}
              >
                {categoryData.map((chunk) => (
                  <div style={{ color: chunk[1] }}>
                    <FormControlLabel
                      key={Math.random()}
                      value={chunk[2]}
                      control={<Radio size="small" />}
                      label={chunk[2]}
                    />
                    <FontAwesomeIcon icon={chunk[0]} />
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Button
          variant="contained"
          style={{ background: "#00838f", color: "#ffffff" }}
          fullWidth
          type="submit"
        >
          Add Activity
        </Button>
      </form>
    </Card>
  );
};

export default AddActForm;
