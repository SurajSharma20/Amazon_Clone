import React from "react";
import "./order.css";
import SearchIcon from "@mui/icons-material/Search";

const Order = () => {
  return (
    <div className="order">
      <h1 className="order_heading">Your Orders</h1>

      <div className="order_search">
        <SearchIcon className="order_search_icons"/>
        <input
          type="text"
          className="order_input"
          placeholder="Search all orders"
        />

        <button className="order_btns">Search orders</button>
      </div>

      <div className="main_order_btns">
        <span className="order_btn">
          <button className="btnss">Orders</button>
        </span>
        <span className="order_btn">
          <button className="btnss">Buy Again</button>
        </span>
        <span className="order_btn">
          <button className="btnss">Not Yet Shipped </button>
        </span>
        <span className="order_btn">
          <button className="btnss">Cancelled Orders</button>
        </span>
      </div>
    </div>
  );
};

export default Order;
