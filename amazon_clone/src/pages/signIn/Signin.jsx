import React from "react";
import "./signin.css";
import logo from "../../assets/images/logo3.png";
import { Link } from "react-router-dom";

function Signin() {
  
  return (
    <div className="signin">
      <div className="logo">
        <img src={logo} className="logo_image" />
      </div>

      <div className="form">
        <h1 className="top_headings">Sign in</h1>

        <div className="input_field">
          <label className="headings">Email or mobile phone number</label>
          <input type="text" className="input_field_text" />
        </div>

        <div className="input_field">
          <label className="headings">Enter your password?</label>
          <input type="text" className="input_field_text" />
        </div>

        <div className="btn_main_container">
          <button type="submit" className="btn">
            Sign in
          </button>
        </div>
      </div>

      <div className="bottom_heading">
        <p>___________New To Amazon____________</p>
      </div>
        
        <Link to="/signup">
      <div className="create_account">
        <button className="btns">Create your Amazon account</button>
      </div>
      </Link>
    </div>
  );
}

export default Signin;
