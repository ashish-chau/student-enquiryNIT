import React from "react";

import DashboardLayoutBasic from "./components/DashboardLayoutBasic";
import StudentEnquiry from "./components/studentEnquiry/StudentEnquiry";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Councellor from "./components/councellor/Councellor";
import EnquiryAdmission from "./components/studentEnquiry/AdmissionEnquiry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayoutBasic />}>
          {/* Nested Routes */}
          <Route path="/student-enquiry" element={<StudentEnquiry />} />
          <Route path="/councellor" element={<Councellor />} />
          <Route path="/enquiry-admission" element={<EnquiryAdmission />} />

          <Route
            path="*"
            element={<h1 style={{ color: "red" }}>404: Page Not Found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    // <DashboardLayoutBasic />
    // <StudentEnquiry/>
  );
}

export default App;
