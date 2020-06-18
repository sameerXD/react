import React from "react";
import "../styles.css";

//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Poster from "../components/Poster";

function AboutUs() {
  return (
    <div className="App">
      <div className="hf">
        <Header />
        <div class="aboutus">
          <div className="aboutPoster">
            <Poster heading="Who We Are" src="url(images/coffee.jpg)" />
          </div>
          <br />
          <div className="container" style={{ padding: "0px 0px 35px" }}>
            <h3>Milko</h3>
            <h3>Want to learn about us </h3>
            <Button text="Contact Us" />
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
