import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../Reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [error,setError] = useState(null)

  const navigate = useNavigate();

  const onClick = ()=>{
    const basketTotal = getBasketTotal(basket);
    if(!basketTotal>0){
      setError("Basket amount must be greater than $0")
      return
    }
    else{
      navigate("/payment")
    }
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={onClick}>Proceed to Checkout</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Subtotal;
