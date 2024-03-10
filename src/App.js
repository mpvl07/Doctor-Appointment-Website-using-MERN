import React from "react";
//import 'antd/dist/antd.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "antd"; // Make sure to import Button from 'antd'
import {Toaster} from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FindDoctor from "./pages/FindDoctor";
import ApiFetcher from "./pages/ApiFetcher";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import UserDashboard from "./components/userDashboard";
import Pharmacies from "./pages/Pharmacies";
import DoctorInterface from "./pages/DoctorInterface";
import DoctorApplyForm from "./pages/DoctorApplyForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        {/* <div className="spinner-parent">
          <div class="spinner-border" role="status">

          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false} /> */}
        <Routes>
          <Route path="/api" element={<ApiFetcher />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/doctorprofile" element={<DoctorProfile />} />
          <Route path="/pharmacies" element={<Pharmacies />} />
          <Route path="/userprofile" element={<UserDashboard />} />
          <Route path="/applydoctor" element={<DoctorInterface />} />
          <Route path="/applyform" element={<DoctorApplyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
