import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Stack,
  TextField,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  IconButton,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material'; // Import the ArrowBack icon
import { addCategoryData } from '../api';

const AddCategory = ({ setAddCategory }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [analyticsEvents, setAnalyticsEvents] = useState('');
  const [restrictedCountries, setRestrictedCountries] = useState([]);
  const [enabled, setEnabled] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState(''); // New state for description

  // Sample countries list for restricted countries dropdown
  const countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Australia', code: 'AU' },
  ];

  const handleSubmit = () => {
    // Handle submit logic here
    console.log({
      title,
      subtitle,
      analyticsEvents,
      restrictedCountries,
      enabled,
      imageURL,
      description, // Include description in the submit logic
    });
    let data = {
      title,
      subtitle,
      analyticsEvents,
      restrictedCountries,
      enabled,
      imageURL,
      description, // Include description in the data object
    };
    addCategoryData(data).then((res) => {
      // Handle the response after submission
    }).catch(err => console.log(err));
  };

  return (
    <Box p={3}>
      {/* Go Back Arrow */}
      <Grid container justifyContent="flex-start" mb={2}>
        <Grid item>
          <IconButton onClick={() => setAddCategory(false)}>
            <ArrowBack />
          </IconButton>
        </Grid>
      </Grid>

      {/* First Row: Title, Subtitle, Analytics Events */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Subtitle"
            variant="outlined"
            fullWidth
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Analytics Events"
            variant="outlined"
            fullWidth
            value={analyticsEvents}
            onChange={(e) => setAnalyticsEvents(e.target.value)}
          />
        </Grid>
      </Grid>

      {/* Second Row: Description TextField */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description} // Bind description state to the TextField
            onChange={(e) => setDescription(e.target.value)} // Update description state
          />
        </Grid>
      </Grid>

      {/* Third Row: Restricted Countries Box */}
      <Box mt={3} p={2} border={1} borderColor="grey.500">
        <FormControl fullWidth>
          <InputLabel>Restricted Countries</InputLabel>
          <Select
            multiple
            value={restrictedCountries}
            onChange={(e) => setRestrictedCountries(e.target.value)}
            label="Restricted Countries"
            renderValue={(selected) => selected.join(', ')}
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.name}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Fourth Row: Image URL TextField */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12}>
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)} // Update imageURL state
          />
        </Grid>
      </Grid>

      {/* Fifth Row: Enable/Disable Toggle and Submit Button */}
      <Grid container spacing={2} alignItems="center" mt={3}>
        <Grid item>
          <FormControlLabel
            control={
              <Switch
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
                name="enabled"
              />
            }
            label={enabled ? 'Enabled' : 'Disabled'}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleSubmit(); // Call handleSubmit when the button is clicked
              setAddCategory(false); // Close the form or toggle the view
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddCategory;
