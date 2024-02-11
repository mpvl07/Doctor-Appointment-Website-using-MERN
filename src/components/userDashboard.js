import React from "react";
import "../index2.css";
import { Link } from "react-router-dom";
function UserDashboard() {
  return (
    <div className="container">
      <nav class="navbar">
        <div class="logo">
          <img src="logo.png" alt="Logo" height="40" />
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
        </ul>
        <div class="book-appointment">
          <Link to="/finddoctor" className="main-book">
            Book An Appointment
          </Link>
        </div>
      </nav>
      <div className="user-info">
        <h2 className="user-name">User Name</h2>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="user-details-card">
            <div className="details-section">
              <div className="left-details">
                <p>
                  <strong>Mobile Number:</strong> User's Mobile Number
                </p>
                <p>
                  <strong>Email Address:</strong> user@example.com
                </p>
                <p>
                  <strong>Residence Address:</strong> User's Residence Address
                </p>
                <p>
                  <strong>Occupation:</strong> User's Occupation
                </p>
                <button
                  className="medical-report-btn"
                  onClick={() => {
                    window.location.href = "medical_report.html";
                  }}>
                  Medical Report
                </button>
              </div>
              <div className="right-details">
                <p>
                  <strong>Date of Birth:</strong> January 1, 1990
                </p>
                <p>
                  <strong>Blood Group:</strong> A+
                </p>
                <p>
                  <strong>Gender:</strong> Male
                </p>
                <p>
                  <strong>Marital Status:</strong> User's Marital Status
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="appointments-card">
            <div className="details-section">
              <div className="left-details">
                <h3>Upcoming Appointments</h3>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Doctor Registration</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12345</td>
                        <td>Dr. Smith</td>
                        <td>2024-02-10</td>
                        <td>09:00 AM</td>
                        <td>
                          <button className="cancel-btn">Cancel</button>
                        </td>
                      </tr>
                      <tr>
                        <td>56789</td>
                        <td>Dr. Johnson</td>
                        <td>2024-02-12</td>
                        <td>02:30 PM</td>
                        <td>
                          <button className="cancel-btn">Cancel</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="appointments-card">
            <div className="details-section">
              <div className="left-details">
                <h3>Past Appointments</h3>
                <div className="table-container">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Doctor Registration</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>54321</td>
                        <td>Dr. Williams</td>
                        <td>2024-02-05</td>
                        <td>11:30 AM</td>
                        <td>
                          <button className="view-report-btn">
                            View Report
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>98765</td>
                        <td>Dr. Davis</td>
                        <td>2024-02-08</td>
                        <td>03:45 PM</td>
                        <td>
                          <button className="view-report-btn">
                            View Report
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
