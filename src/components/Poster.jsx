import React from "react";
import "../styles.css";

function Poster(props) {
  return (
    // <div className="container acard">
    //         <div class="card bg-dark text-white ">
    //           <img src={props.src} class="mw-100" alt="..." />
    //           <div class="card-img-overlay" >

    //             <h1 class="card-text" style={{paddingTop:"35px" }}>
    //               {props.text}
    //             </h1>

    //           </div>
    //Hello Products Start editing to see some magic happen!
    //         </div>
    //         </div>
    <div
      class="jumbotron jumbotron-fluid"
      style={{ backgroundImage: props.src, backgroundSize: "cover" }}
    >
      <div class="container container-fluid">
        <h1 class="display-4">{props.heading}</h1>
        <p class="lead">{props.subHeading}</p>
      </div>
    </div>
  );
}

export default Poster;
