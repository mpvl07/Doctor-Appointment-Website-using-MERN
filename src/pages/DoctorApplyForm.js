import React from 'react'
import "../Login.css";
import { Link } from 'react-router-dom';
function DoctorApplyForm() {
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
            <Link to="/applyform">Apply Doctor</Link>
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
          <li>
            <a href="/userprofile">Profile</a>
          </li>
        </ul>
      </nav>
      <div id="heading">
        <h1>Apply for Doctor</h1>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="name">name:</label>
          <input type="text" id="name" name="username" />
          <label htmlFor="password">Doctor RegisterNo:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="password">State Council Name:</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="password">Specialization</label>

          <input type="password" id="password" name="password" />
          <button type="submit">Submit</button>
        </form>
        <div className="register-link"></div>
      </div>
    </div>
  );
}

export default DoctorApplyForm;

