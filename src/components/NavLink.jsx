import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navlink(props) {
  return (
    <div id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <Link class="nav-link" to={props.to}>
            {props.link}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navlink;
