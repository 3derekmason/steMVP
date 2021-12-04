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
import { faPen } from "@fortawesome/free-solid-svg-icons";

import AppContext from "./AppContext.js";
import ActivityModal from "./ActivityModal.jsx";

const AddActForm = () => {
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

  const catChoices = [
    "art",
    "bugs",
    "dinosaurs",
    "music",
    "nature",
    "ocean",
    "sensory",
    "space",
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
    <Card style={{ padding: "16px" }}>
      <form onSubmit={handleSubmit}>
        <div id="formTitle">
          <TextField
            id="title-input"
            name="title"
            label="Activity Title"
            type="text"
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
              name="groupSize"
              label="Group Size"
              placeholder="Ex: 3-4"
              type="text"
              value={formValues.groupSize}
              onChange={handleInputChange}
            />
            <TextField
              id="duration-input"
              name="duration"
              label="Duration"
              placeholder="Ex: 5-10 minutes"
              type="text"
              value={formValues.duration}
              onChange={handleInputChange}
            />
            <TextField
              id="title-input"
              name="description"
              label="Description"
              type="text"
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
                value={formValues.category}
                onChange={handleInputChange}
              >
                {catChoices.map((category) => (
                  <FormControlLabel
                    key={category}
                    value={category}
                    control={<Radio size="small" />}
                    label={category}
                  />
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
