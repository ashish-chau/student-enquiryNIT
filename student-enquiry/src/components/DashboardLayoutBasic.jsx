import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import StudentEnquiry from "./studentEnquiry/StudentEnquiry";
import AdmissionEnquiry from "./studentEnquiry/AdmissionEnquiry";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import Councellor from "./councellor/Councellor";
import DashboardFooter from "./DashboardFooter";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "student-enquiry",
    title: "Student Enquiry",
    icon: <DashboardIcon />,
  },

  {
    segment: "councellor",
    title: "Councellor",
    icon: <BarChartIcon />,
  },
  {
    segment: "admission-enquiry",
    title: "Admission Enquiry",
    icon: <AssignmentTurnedInRoundedIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  let content;

  switch (pathname) {
    case "/student-enquiry":
      content = <StudentEnquiry />;
      break;
    case "/councellor":
      content = <Councellor />;
      break;
    case "/admission-enquiry":
      content = <AdmissionEnquiry />;
      break;
    default:
      content = (
        <Typography variant="h6" align="center">
          Select an option from the menu
        </Typography>
      );
  }

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        px: 2,
      }}
    >
      {content}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="Naresh_IT_Logo.png.png" alt="MUI logo" />,
        title: "",
        homeUrl: "",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
        <DashboardFooter/>
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
