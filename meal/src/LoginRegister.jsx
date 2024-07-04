import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LoginRegister = () => {
  const [action, setAction] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "" // Add role state
  });

  const registerlink = () => {
    setAction("active");
  };

  const loginlink = () => {
    setAction("");
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOnChangeReg = (e) => {
    const { name, value } = e.target;
    setRegForm((prevRegForm) => ({ ...prevRegForm, [name]: value }));
  };

  const handleSubmit = async (e, url) => {
    e.preventDefault();
    try {
      const apiUrl = `http://localhost:8800/api/v1${url}`;
      const postData = url === "/register" ? regForm : formData;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        // Add logic for successful login or registration
        // Reset the forms after successful submission
        setFormData({ email: "", password: "" });
        setRegForm({
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
          role: ""
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Add logic to handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <div className={`wrapper ${action}`}>
        {/* Login Form */}
        <div className="form-box login">
          <form onSubmit={(e) => handleSubmit(e, "/login")}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="Email"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <Link to="#">Forgot Password</Link>
            </div>
            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <Link to="#" onClick={registerlink}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <form onSubmit={(e) => handleSubmit(e, "/register")}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={regForm.username}
                onChange={handleOnChangeReg}
                placeholder="Username"
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={regForm.email}
                onChange={handleOnChangeReg}
                placeholder="Email"
                required
              />
              <MdEmail className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={regForm.password}
                onChange={handleOnChangeReg}
                placeholder="Password"
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="confirmpassword"
                value={regForm.confirmpassword}
                onChange={handleOnChangeReg}
                placeholder="Confirm Password"
                required
              />
              <RiLockPasswordFill className="icon" />
            </div>
            <div className="input-box role">
              <label>
                Role:
                <input
                  type="radio"
                  name="role"
                  value="Beneficiary"
                  checked={regForm.role === "Beneficiary"}
                  onChange={handleOnChangeReg}
                />
                Beneficiary
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="Donor"
                  checked={regForm.role === "Donor"}
                  onChange={handleOnChangeReg}
                />
                Donor
              </label>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" />I agree to the terms and conditions
              </label>
            </div>
            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <Link to="#" onClick={loginlink}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
