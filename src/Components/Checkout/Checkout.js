import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your Shpping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              image={item.image}
              id={item.id}
              price={item.price}
              rating={item.rating}
              title={item.title}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
