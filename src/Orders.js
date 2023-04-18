import React from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "./reducer";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <p>{user?.metadata.creationTime}</p>
      <div className="order_items">
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        <NumericFormat
          renderText={(value) => (
            <h3 className="order_total">Order Total : {value}</h3>
          )}
          decimalScale={2}
          displayType="text"
          value={getBasketTotal(basket)}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Orders;
