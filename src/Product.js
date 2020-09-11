import React from "react";

import "./Product.css";

import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
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
      </div>

      <img alt="product_image" src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
