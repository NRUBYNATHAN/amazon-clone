import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType="text"
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
