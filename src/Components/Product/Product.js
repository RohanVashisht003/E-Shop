import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch item to data layer
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
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((index) => (
              <p key={index}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
