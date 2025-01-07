import React from "react";
import {
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const DashboardFooter = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.primary.main,
        color: theme.palette.getContrastText(
          theme.palette.mode === "dark"
            ? theme.palette.background.default
            : theme.palette.primary.main
        ),
        py: 1,
        px: 1,
        mt: "auto",
      }}
    >
      {/* <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are a leading EdTech company providing innovative solutions for
            student management and educational services.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/student-enquiry" color="inherit" underline="hover">
            Student Enquiry
          </Link>
          <br />
          <Link href="/admission-enquiry" color="inherit" underline="hover">
            Admission Enquiry
          </Link>
          <br />
          <Link href="/councellor" color="inherit" underline="hover">
            Counsellor
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Connect With Us
          </Typography>
          <Box>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "inherit" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "inherit" }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "inherit" }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "inherit" }}>
              <InstagramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid> */}
      <Box
        sx={{
          textAlign: "center",
          mt: 1,

          pt: 1,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} Naresh i Technologies | Software
          Training - Online Training - Live Project Training - Weekend Training.
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardFooter;
