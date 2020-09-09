import React from "react";

import "./Home.css";

import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="home_banner_image"
          src="amazon_banner.jpg"
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.us0iNtMKcYPDVBHR8BQSiAAAAA%26pid%3DApi&f=1"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
