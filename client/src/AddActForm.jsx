import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, FormHelperText, InputLabel, Select, MenuItem, NativeSelect, Radio, RadioGroup, TextField } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AddActForm = () => {

  const defaultValues = {
    title: "",
    description: "",
    duration: "",
    groupSize: "",
    category: ""
  };

  const [formValues, setFormValues] = useState(defaultValues);

  const catChoices = ['art', 'bugs', 'dinosaurs', 'music', 'nature', 'ocean', 'sensory', 'space'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Card style={{padding: '16px'}}>
      <form>
          <TextField
              id="title-input"
              name="title"
              label="Activity Title"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />
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
              rows={8}
              rowsMax={10}
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
              {catChoices.map((category) => <FormControlLabel
                  key={category}
                  value={category}
                  control={<Radio size="small" />}
                  label={category}
                />
              )}
              </RadioGroup>
            </FormControl>

          </div>

        </div>

      </form>
    </Card>
  );
};

export default AddActForm;