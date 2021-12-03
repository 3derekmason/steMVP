import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, FormControl, FormHelperText, InputLabel, Select, NativeSelect } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicroscope, faSeedling } from '@fortawesome/free-solid-svg-icons'


const ActForm = () => {

  const [currentCategory, setCurrentCategory] = useState();

  const handleChange = (event) => {
    console.log(event.target.value)
  };


  return (
    <Card id="actform">
      <div className="filter" style={{width: '66%'}}>
      <FormControl >
        <InputLabel htmlFor="category-native-helper">Category</InputLabel>
        <NativeSelect
          value={''}
          onChange={handleChange}
          inputProps={{
            name: 'category',
            id: 'category-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option >Art</option>
          <option >Bugs</option>
          <option >Dinosaurs</option>
          <option >Music</option>
          <option >Nature</option>
          <option >Ocean</option>
          <option >Sensory</option>
          <option >Space</option>
        </NativeSelect>
        <FormHelperText>Filter by category</FormHelperText>
      </FormControl>
      </div>
      <div className="buttons" style={{width: '33%'}}>
        <Button variant="contianed" color="primary">Add Activity</Button>
        <Button color="secondary">RANDOM ACTIVITY</Button>
      </div>
    </Card>
  );
};

export default ActForm;