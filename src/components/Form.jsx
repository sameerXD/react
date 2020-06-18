import React from "react";
import "../styles.css";

function Form() {
  return (
    <div>
      <form action="">
        <div className="container-md form ">
          <div className="row">
            <div className="col-sm">
              <input type="text" id="name" placeHolder="Name" />
              <input type="text" id="email" placeHolder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <input type="text" id="phone" placeHolder="Phone" />
              <input type="text" id="address" placeHolder="Address" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <input type="text" id="Subject" placeHolder="Subject" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              />
            </div>
          </div>
          <div class="row">
            <input className="btn" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
