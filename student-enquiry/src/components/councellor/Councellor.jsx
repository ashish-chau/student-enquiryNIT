import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const studentDetailsOptions = [
  "Undergraduate",
  "Postgraduate",
  "Diploma",
  "High School",
];
const joiningOptions = ["Immediate", "Two Week Joining", "1 Month Joining", "Others"];
const councellorOptions = [
  "Already a Student",
  "Current Student",
  "Old Student",
  "Any Others",
];
const priorityLevels = ["Immediate", "Immediate Follow Up", "Follow Up In 2 Days", "On Week"];

const Councellor = () => {
  const [formData, setFormData] = useState({
    studentDetail: "",
    counselorUpdate: [],
    lookingForJoining: [],
    priority: [],
  });

  // Handle dropdown change
  const handleDropdownChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      studentDetail: event.target.value,
    }));
  };

  // Handle checkbox toggle for arrays
  const handleCheckboxToggle = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        maxWidth: "400px",
        mx: "auto",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Councellor Form
      </Typography>
      <Grid container spacing={2}>
        {/* Student Details Dropdown */}
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="student-detail-label">Student Details</InputLabel>
            <Select
              labelId="student-detail-label"
              value={formData.studentDetail}
              onChange={handleDropdownChange}
            >
              {studentDetailsOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Counselor Update Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Counselor Update:
          </Typography>
          {councellorOptions.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={formData.counselorUpdate.includes(option)}
                  onChange={() =>
                    handleCheckboxToggle("counselorUpdate", option)
                  }
                />
              }
              label={option}
            />
          ))}
        </Grid>

        {/* Looking for Joining Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Looking for Joining:
          </Typography>
          {joiningOptions.map((option) => (
            <FormControlLabel
              key={option}
              control={
                <Checkbox
                  checked={formData.lookingForJoining.includes(option)}
                  onChange={() =>
                    handleCheckboxToggle("lookingForJoining", option)
                  }
                />
              }
              label={option}
            />
          ))}
        </Grid>

        {/* Priority Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Priority:
          </Typography>
          {priorityLevels.map((level) => (
            <FormControlLabel
              key={level}
              control={
                <Checkbox
                  checked={formData.priority.includes(level)}
                  onChange={() => handleCheckboxToggle("priority", level)}
                />
              }
              label={level}
            />
          ))}
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            
            size="large"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Councellor;
