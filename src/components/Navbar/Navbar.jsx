import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <i className="ri-book-open-fill"></i> istudia
      </h2>
      <ul className="nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="courses">Courses</Link>
        </li>
        <li className="dropdown">
          <Link>
            Pages <i className="ri-arrow-down-s-line"></i>
          </Link>
          <div class="dropdown-content">
            <Link>About Us</Link>
            <Link>Our Instructors</Link>
            <Link>Instructor Details</Link>
            <Link>Our Mentors</Link>
            <Link>Event Details</Link>
            <Link>Asked Question</Link>
            <Link>Contact</Link>
          </div>
        </li>

        <li className="dropdown">
          <Link>
            Events <i className="ri-arrow-down-s-line"></i>
          </Link>
          <div className="dropdown-content">
            <Link>About Us</Link>
            <Link>Our Instructors</Link>
          </div>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
      <div className="login">
        <Link>
          <i className="ri-user-line"></i>
        </Link>
        <Link href="">
          <i className="ri-shopping-bag-line"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
