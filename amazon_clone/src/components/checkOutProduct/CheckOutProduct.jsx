import React from "react";
import "./checkOutProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "../stateProvider/Stateprovider";

const CheckOutProduct = ({ id, image, price, rating, title }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} />

      <div className="checkoutproduct_info">
        <div className="checkoutproduct_title">
          {title}
          <div className="checkoutprice">
            <div className="chekoutProduct_price">
              <small>$</small>
              <strong>{price}</strong>
            </div>

            <div className="checkoutproduct_rating">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p>
                    <GradeIcon className="rating_star" />
                  </p>
                ))}
            </div>

            <button className="checkoutproduct_btns" onClick={removeProduct}>
              Remove from basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProduct;
