import React from "react";
import "../styles.css";

//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Address from "../components/Address";
import Form from "../components/Form";
import SimpleMap from "../components/GoogleMap";

export default function ContactUS() {
  return (
    <div className="App">
      <div className="hf">
        <Header />
        <div id="borderimg2">
          <div class="container-sm">
            <div class="row">
              <div class="col-sm">
                <Address />
              </div>
              <div class="col-sm">
                <Form />
              </div>
            </div>
          </div>

          <SimpleMap />
        </div>
      </div>

      <Footer />
    </div>
  );
}
