import React from "react";
import "../styles.css";

//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="App">
      <div className="hf">
        <Header />
        <div class=" home container">
          <div class="row">
            <div class="col align-self-center">
              <h1>Milko</h1>
              <h2>
                Bringing to you, the comfort and quality to which every dadi and
                nani would lay her trust on.
              </h2>
              <br />
              <h2>Stay Natural:</h2>

              <Button text="Download Now" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
