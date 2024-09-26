import React from "react";
import "./cart.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "../stateProvider/Stateprovider";

const Cart = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
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
    <div className="cart">
      <div className="cart_info">
        <p>{title}</p>
        <p>{id}</p>
        <span className="prince">
          <small>$</small>
          <strong>{price}</strong>
          <div className="card_ratings">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon className="rating_star" />
              </p>
            ))}
        </div>
        </span>
        
      </div>

      <img src={image} className="book_cover" />
      <button className="cart_button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
};

export default Cart;
