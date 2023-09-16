import React from "react";
import "./Order.css";
import moment from "moment/moment";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {order.data.basket.map((item, index) => (
        <CheckoutProduct
          image={item.image}
          id={item.id}
          price={item.price}
          rating={item.rating}
          title={item.title}
          key={index}
          hideButton={true}
        />
      ))}

      <CurrencyFormat
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Order;
