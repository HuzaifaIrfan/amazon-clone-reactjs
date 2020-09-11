import React from "react";

import "./Checkout.css";
import Subtotal from "./Subtotal";

import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout_ad" alt="deal_banner" src="deal_banner.jpeg" />

        <div>
          <h3>Hello, {!user ? "Guest" : user?.email}</h3>
          <h2 className="checkout_title">The shopping Basket</h2>

          {basket.map((item, index) => {
            // console.log(index);
            return (
              <CheckoutProduct
                key={index}
                displayindex={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
