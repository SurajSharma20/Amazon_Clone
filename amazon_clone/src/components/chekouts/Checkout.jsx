import React from "react";
import "./checkout.css";
import Subtotal from "../subtotals/Subtotal";
import { useStateValue } from "../stateProvider/Stateprovider";
import CheckOutProduct from "../checkOutProduct/CheckOutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h1 className="checkout_heading">Your Shooping Items</h1>
        <div className="chekoutproduct_items">
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="chekout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
  