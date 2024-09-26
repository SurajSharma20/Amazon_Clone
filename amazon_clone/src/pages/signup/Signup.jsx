import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/images/logo3.png";
import { Link, useNavigate  } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    country: "",
    password: "",
    c_password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // Input validation
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.mobile_no) newErrors.mobile_no = "Mobile number is required.";

    if (!formData.country) newErrors.country = "Country is required.";

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!formData.c_password)
      newErrors.c_password = "Confirm password is required.";

    if (formData.password !== formData.c_password)
      newErrors.c_password = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      window.location.reload();
      const { name, email, mobile_no, country, password, c_password } =
        formData;
      const responce = await fetch("http://localhost:5000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile_no,
          country,
          password,
          c_password
        })
      })
      navigate("/signIn")
    }
  
  };
  return (
    <div className="signin">
      <Link to="/">
        <div className="logo">
          <img src={logo} className="logo_image" />
        </div>
      </Link>

      <form  className="form_main_container" method="POST">
        <h1>Sign Up</h1>
        <div className="signup_container">
          <label htmlFor="" className="label_heading">Name</label>
          <input type="text" className="input_signup_field" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
            {errors.name && <p className="error-messages">{errors.name}</p>}
        </div>

        <div className="signup_container">
          <label htmlFor="" className="label_heading">Email Number</label>
          <input type="text" className="input_signup_field"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
            {errors.email && <p className="error-messages">{errors.email}</p>}
        </div>

        <div className="signup_container">
          <label htmlFor="" className="label_heading">Mobile Number</label>
          <input type="text" className="input_signup_field"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
          />
            {errors.mobile_no && <p className="error-messages">{errors.mobile_no}</p>}
        </div>

        <div className="signup_container">
          <label htmlFor="" className="label_heading">Country</label>
          <input type="text" className="input_signup_field" 
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
            {errors.country && <p className="error-messages">{errors.country}</p>}
        </div>

        <div className="signup_container">
          <label htmlFor="" className="label_heading">Password</label>
          <input type="text" className="input_signup_field"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
            {errors.password && <p className="error-messages">{errors.password}</p>}
        </div>

        <div className="signup_container">
          <label htmlFor="" className="label_heading">Confirm Password</label>
          <input type="text" className="input_signup_field" 
            name="c_password"
            value={formData.c_password}
            onChange={handleChange}
          />
            {errors.c_password && <p className="error-messages">{errors.c_password}</p>}
        </div>

        <button type="submit" className="signup_btn" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
