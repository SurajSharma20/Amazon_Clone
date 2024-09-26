import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider/Stateprovider";
const Header = () => {
  const [{basket} , dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo_header" />
      </Link>
      <div className="header_search">
        <input
          type="text"
          className="header_searchInput"
          placeholder="Search amazon.in"
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <Link to="/signin">
        <div className="header_nav">
          <div className="header_nav_option">
            <span className="header_nav_optionOne">Hello Guest</span>
            <span className="header_nav_optiontwo">Sign In</span>
          </div>
        </div>
      </Link>

        <Link to="/order">
      <div className="header_nav">
        <div className="header_nav_option">
          <span className="header_nav_optionOne">Returns</span>
          <span className="header_nav_optiontwo">& order</span>
        </div>
      </div>
    
        </Link>
        
        <Link to="/prime">
      <div className="header_nav">
        <div className="header_nav_option">
          <span className="header_nav_optionOne">Your</span>
          <span className="header_nav_optiontwo">Prime</span>
        </div>
      </div>
      </Link>

      <Link to="/checkout">
        <div className="shoping_BasketIcon">
          <ShoppingBasketIcon className="shoping_optionOne" />
          <span className="shoping_OpitionTwo">{basket.length}</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
