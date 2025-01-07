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
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const enquiryModes = [
  "Walk-In",
  "Phone Call",
  "Email",
  "Social Media",
  "Website",
];
const enquiryCourses = ["Course", "Follow Up"];
const students = ["Karan", "Venktesh", "Lokesh"];
const counsellors = ["Shudhakar", "Amit", "Zareen"];
const callStatuses = ["Not lifting", "Switch Off", "Wrong No.", "Out Of Network", "Answered"];
const admissionStatuses = ["Already Join NIT", "Immediate But Need Follow", "Thinking Twice", "Interested In Different Institute", "Interested To Join Other Institute", "Already Join Other Institute"];
const furtherCounselingOptions = ["Yes", "No"];

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    enquiryMode: [],
    enquiryCourses: [],
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [followUpData, setFollowUpData] = useState({
    student: "",
    counsellor: "",
    telecallerUpdate: "",
    callStatus: "",
    admissionStatus: "",
    needFurtherCounseling: "",
  });

  // Handle checkbox toggle
  const handleCheckboxToggle = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));

    if (field === "enquiryCourses" && value === "Follow Up") {
      setModalOpen(true); // Open modal if Follow Up is selected
    }
  };

  // Handle follow-up form changes
  const handleFollowUpChange = (field, value) => {
    setFollowUpData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted!");
  };

  const handleFollowUpSubmit = (event) => {
    event.preventDefault();
    console.log("Follow-Up Data Submitted:", followUpData);
    alert("Follow-Up Submitted!");
    setModalOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        maxWidth: 500,
        mx: "auto",
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom align="center">
        Admission Enquiry Form
      </Typography>
      <Grid container spacing={3}>
        {/* Enquiry Mode Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Enquiry Mode:
          </Typography>
          {enquiryModes.map((mode) => (
            <FormControlLabel
              key={mode}
              control={
                <Checkbox
                  checked={formData.enquiryMode.includes(mode)}
                  onChange={() => handleCheckboxToggle("enquiryMode", mode)}
                />
              }
              label={mode}
            />
          ))}
        </Grid>

        {/* Enquiry Courses Checkboxes */}
        <Grid item xs={12}>
          <Typography variant="subtitle1" gutterBottom>
            Enquiry Through Courses:
          </Typography>
          {enquiryCourses.map((course) => (
            <FormControlLabel
              key={course}
              control={
                <Checkbox
                  checked={formData.enquiryCourses.includes(course)}
                  onChange={() =>
                    handleCheckboxToggle("enquiryCourses", course)
                  }
                />
              }
              label={course}
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
            Submit Enquiry
          </Button>
        </Grid>
      </Grid>

      {/* Follow-Up Modal */}
      <Modal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="follow-up-modal-title"
        aria-describedby="follow-up-modal-description"
      >
        <Box
          component="form"
          onSubmit={handleFollowUpSubmit}
          sx={{
            p: 3,
            maxWidth: 500,
            mx: "auto",
            mt: 5,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            maxHeight: "80vh", // Set maximum height
            overflowY: "auto", // Enable scrolling if content overflows
          }}
        >
          <Typography variant="h5" gutterBottom>
            Follow-Up Details
          </Typography>

          {/* Select Student */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="student-label">Select Student</InputLabel>
            <Select
              labelId="student-label"
              value={followUpData.student}
              onChange={(e) => handleFollowUpChange("student", e.target.value)}
            >
              {students.map((student) => (
                <MenuItem key={student} value={student}>
                  {student}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Select Counsellor */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="counsellor-label">Select Counsellor</InputLabel>
            <Select
              labelId="counsellor-label"
              value={followUpData.counsellor}
              onChange={(e) =>
                handleFollowUpChange("counsellor", e.target.value)
              }
            >
              {counsellors.map((counsellor) => (
                <MenuItem key={counsellor} value={counsellor}>
                  {counsellor}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Telecaller Update */}
          <TextField
            fullWidth
            label="Telecaller Update"
            margin="normal"
            value={followUpData.telecallerUpdate}
            onChange={(e) =>
              handleFollowUpChange("telecallerUpdate", e.target.value)
            }
          />

          {/* Call Status */}
          <FormControl component="fieldset" margin="normal">
            <Typography variant="subtitle1" gutterBottom>
              Call Status:
            </Typography>
            <RadioGroup
              value={followUpData.callStatus}
              onChange={(e) =>
                handleFollowUpChange("callStatus", e.target.value)
              }
            >
              {callStatuses.map((status) => (
                <FormControlLabel
                  key={status}
                  value={status}
                  control={<Radio />}
                  label={status}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Admission Status */}
          <FormControl component="fieldset" margin="normal">
            <Typography variant="subtitle1" gutterBottom>
              Admission Status:
            </Typography>
            <RadioGroup
              value={followUpData.admissionStatus}
              onChange={(e) =>
                handleFollowUpChange("admissionStatus", e.target.value)
              }
            >
              {admissionStatuses.map((status) => (
                <FormControlLabel
                  key={status}
                  value={status}
                  control={<Radio />}
                  label={status}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Need Further Counseling */}
          <FormControl component="fieldset" margin="normal">
            <Typography variant="subtitle1" gutterBottom>
              Need Further Counseling:
            </Typography>
            <RadioGroup
              value={followUpData.needFurtherCounseling}
              onChange={(e) =>
                handleFollowUpChange("needFurtherCounseling", e.target.value)
              }
            >
              {furtherCounselingOptions.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Follow-Up
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AdmissionEnquiry;
