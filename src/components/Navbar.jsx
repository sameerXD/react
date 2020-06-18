import React from "react";
import Logo from "./Logo";
import Navlink from "./NavLink";

function Navbar(props) {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#386893" }}
      >
        <Logo src="/LOGO2alt.png" width="60" height="60" alt="" />
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li> */}
            <Navlink to="/" link="Home" />
            <Navlink to="/Products" link="Products" />
            <Navlink to="/AboutUs" link="About Us" />
            <Navlink to="/ContactUs" link="Contact Us" />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
