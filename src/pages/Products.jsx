import React from "react";
import "../styles.css";

//components
import Header from "../components/Header.jsx";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Poster from "../components/Poster";

export default function Products() {
  return (
    <div className="App ">
      <div>
        <Header />
        <Poster heading="Products" src="url(/milk.jpg)" />
        <div class="body container">
          <div class="row">
            <Cards
              src="/cow.jpg"
              title="Cow Milk"
              description="Staying Healthy"
            />

            <Cards
              src="/butter.jpg"
              title="Buffalo Milk"
              description="Only the Best"
            />

            <Cards
              src="/cheese.jpg"
              title="Ghee"
              description="Whatever You Need"
            />
            <Cards
              src="/curd.jpg"
              title="Natural Yogurt"
              description="Staying Healthy"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
