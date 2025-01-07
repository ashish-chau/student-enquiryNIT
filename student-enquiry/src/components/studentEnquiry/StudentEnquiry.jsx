import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

const courses = [
  "Web Development",
  "Data Science",
  "Machine Learning",
  "UI/UX Design",
  "Mobile App Development",
];

const technologyMap = {
  "Web Development": ["React", "Angular", "Vue", "Node.js", "Django"],
  "Data Science": ["Python", "R", "Pandas", "TensorFlow", "Scikit-learn"],
  "Machine Learning": ["Python", "TensorFlow", "Keras", "PyTorch"],
  "UI/UX Design": ["Figma", "Sketch", "Adobe XD", "InVision"],
  "Mobile App Development": ["Flutter", "React Native", "Swift", "Kotlin"],
};

const timings = ["Morning", "Afternoon", "Evening"];

const StudentEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interestedCourses: [],
    webTechnology: [],
    preferredTimings: [],
    preferredMode: "",
    academicDetails: "",
    personalDetails: "",
  });

  const [availableTechnologies, setAvailableTechnologies] = useState([]);

  useEffect(() => {
    // Set available technologies based on selected courses
    const technologies = formData.interestedCourses.reduce((acc, course) => {
      if (technologyMap[course]) {
        acc.push(...technologyMap[course]);
      }
      return acc;
    }, []);
    setAvailableTechnologies([...new Set(technologies)]);
  }, [formData.interestedCourses]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event, field) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted: ", formData);
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
        Student Enquiry Form
      </Typography>
      <Grid container spacing={2}>
        {/* Name Field */}
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        {/* Phone Number Field */}
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            required
            type="tel"
          />
        </Grid>

        {/* Email ID Field */}
        <Grid item xs={12}>
          <TextField
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            type="email"
          />
        </Grid>

        {/* Interested Courses Field */}
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="courses-label">Interested Courses</InputLabel>
            <Select
              labelId="courses-label"
              name="interestedCourses"
              multiple
              value={formData.interestedCourses}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  <Checkbox
                    checked={formData.interestedCourses.includes(course)}
                  />
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Web Technology Field */}
        <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="web-tech-label">Web Technology</InputLabel>
            <Select
              labelId="web-tech-label"
              name="webTechnology"
              multiple
              value={formData.webTechnology}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {availableTechnologies.map((tech) => (
                <MenuItem key={tech} value={tech}>
                  <Checkbox
                    checked={formData.webTechnology.includes(tech)}
                  />
                  {tech}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Preferred Timings Field */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Preferred Timings:
          </Typography>
          {timings.map((timing) => (
            <FormControlLabel
              key={timing}
              control={
                <Checkbox
                  checked={formData.preferredTimings.includes(timing)}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      preferredTimings: prev.preferredTimings.includes(timing)
                        ? prev.preferredTimings.filter((t) => t !== timing)
                        : [...prev.preferredTimings, timing],
                    }))
                  }
                  value={timing}
                />
              }
              label={timing}
            />
          ))}
        </Grid>

        {/* Preferred Mode Field */}
        <Grid item xs={12}>
          <TextField
            label="Preferred Mode (e.g., Online, Offline)"
            name="preferredMode"
            value={formData.preferredMode}
            onChange={handleChange}
            fullWidth
            required
          />
        </Grid>

        {/* Academic Details Field */}
        <Grid item xs={12}>
          <TextField
            label="Academic Details"
            name="academicDetails"
            value={formData.academicDetails}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
          />
        </Grid>

        {/* Personal Details Field */}
        <Grid item xs={12}>
          <TextField
            label="Personal Details"
            name="personalDetails"
            value={formData.personalDetails}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" size="large">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentEnquiry;
