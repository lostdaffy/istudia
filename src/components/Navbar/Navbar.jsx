import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <i class="ri-book-open-fill"></i> istudia
      </h2>
      <ul className="nav-link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li className="dropdown">
          <a>
            Pages <i class="ri-arrow-down-s-line"></i>
          </a>
          <div class="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">Our Instructors</a>
            <a href="#">Instructor Details</a>
            <a href="#">Our Mentors</a>
            <a href="#">Event Details</a>
            <a href="#">Asked Question</a>
            <a href="#">Contact</a>
          </div>
        </li>

        <li className="dropdown">
          <a>
            Events <i class="ri-arrow-down-s-line"></i>
          </a>
          <div class="dropdown-content">
            <a href="#">About Us</a>
            <a href="#">Our Instructors</a>
          </div>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="login">
        <a href="">
        <i class="ri-user-line"></i>
        </a>
        <a href="">
          <i class="ri-shopping-bag-line"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
