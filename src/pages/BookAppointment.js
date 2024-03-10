import React from "react";
import { Link} from "react-router-dom";
function BookAppointment() {
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
        <div class="book-appointment">
          <Link to="/finddoctor" className="main-book">
            Book An Appointment
          </Link>
        </div>
      </nav>

      <div class="appointment-container">
        <h2>Doctor Appointment Registration</h2>
        <form action="#" method="post">
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div class="form-group">
            <label for="doctor">Select Doctor:</label>
            <select id="doctor" name="doctor" required />
            <option value="">Choose Doctor</option>
            <option value="dr-smith">Dr. Smith</option>
            <option value="dr-doe">Dr. Doe</option>

            <select />
          </div>
          <div class="form-group">
            <label for="date">Appointment Date:</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div class="form-group">
            <label for="time">Appointment Time:</label>
            <input type="time" id="time" name="time" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
