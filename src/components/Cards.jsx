import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./Button";

function Cards(props) {
  return (
    
    <div class="col-md-6 product ">
      <div
        class="card bg-dark text-white "
        style={{ width: "18rem", height: "18rem" }}
      >
        <img
          class="card-img"
          src={props.src}
          alt="Card image"
          style={{ width: "18rem", height: "18rem" }}
        />
        <div class="card-img-overlay">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>

          <Button text="Get In Touch" />
        
      </div>
      </div>
    </div>
  );
}

export default Cards;
