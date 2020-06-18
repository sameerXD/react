import React from "react";

function Logo(props) {
  return (
    <nav class="navbar navbar-light ">
      <a class="navbar-brand" href="#">
        <img
          src={props.src}
          class="logo"
          width={props.width}
          height={props.width}
          alt={props.alt}
          loading="lazy"
        />
      </a>
    </nav>
  );
}

export default Logo;
