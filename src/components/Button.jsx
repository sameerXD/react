import React from "react";
import "../styles.css";

function Button(props) {
  return (
    <div>
      <button class="button">
        <span>{props.text}</span>
      </button>
    </div>
  );
}

export default Button;
