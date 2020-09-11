import React from "react";

import "./CheckoutProduct.css";

import { useStateValue } from "./StateProvider";

function CheckoutProduct({ displayindex, id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      displayindex: displayindex,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        alt="checkoutProduct__image"
        src={image}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <span key={i} role="img">
                  ⭐
                </span>
              );
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
