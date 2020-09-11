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
            id="121233"
            title="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark "
            price={7.53}
            image="https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_UL115_.jpg"
            rating={4}
          />
          <Product
            id="121623"
            title="Fjallraven Women's Kanken Backpack "
            price={66.46}
            image="https://images-na.ssl-images-amazon.com/images/I/81df6ful9PL._AC_UL160_SR160,160_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="128123"
            title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR "
            price={429.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81ZKNYBwYlL._AC_UL320_SR234,320_.jpg"
            rating={4}
          />
          <Product
            id="1211323"
            title="AmazonBasics Nylon Braided Lightning to USB A Cable, MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot "
            price={14.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6158bBEbM3L._AC_UL160_SR160,160_.jpg"
            rating={5}
          />
          <Product
            id="12153423"
            title="Wemo Light Switch, WiFi enabled, Works with Alexa and the Google Assistant (F7C030fc) "
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/510yp4Dw5pL._AC_UL115_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="125237123"
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)
4.6 out of 5 stars"
            price={549.99}
            image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
