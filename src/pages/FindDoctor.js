import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
const FindDoctor = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul class="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/finddoctor">Find a Doctor</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/pharmacies">Pharmacy</a>
          </li>
        </ul>
      </nav>

      <div class="search-container">
        <input
          type="text"
          placeholder="Search doctor with specializations"
          class="search-input"
        />
        <button type="submit" class="search-button">
          <i class="fas fa-search"></i> Search
        </button>
      </div>
      <div class="doctor-container">
        <div class="doctor-box">
          <Link to="/doctorprofile">
            <img
              src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=900&t=st=1707319918~exp=1707320518~hmac=046a1aaeee342290d0389f04c51b706fcafc7d8caf1c92d1bee9692247c602df"
              alt="Doctor 1"
              class="doctor-image"
            />
            <div class="doctor-info">
              <h3 class="doctor-name">Dr. John Doe</h3>
              <p class="doctor-specialization">Cardiologist</p>
            </div>
          </Link>
        </div>
        <div class="doctor-box">
          <img
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=900&t=st=1707319918~exp=1707320518~hmac=046a1aaeee342290d0389f04c51b706fcafc7d8caf1c92d1bee9692247c602df"
            alt="Doctor 1"
            class="doctor-image"
          />
          <div class="doctor-info">
            <h3 class="doctor-name">Dr. John Doe</h3>
            <p class="doctor-specialization">Cardiologist</p>
          </div>
        </div>
        <div class="doctor-box">
          <img
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=900&t=st=1707319918~exp=1707320518~hmac=046a1aaeee342290d0389f04c51b706fcafc7d8caf1c92d1bee9692247c602df"
            alt="Doctor 1"
            class="doctor-image"
          />
          <div class="doctor-info">
            <h3 class="doctor-name">Dr. John Doe</h3>
            <p class="doctor-specialization">Cardiologist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
