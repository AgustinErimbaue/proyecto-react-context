import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/UserState/UserState";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setMessage("All fields are required.");
      setBtnDisabled(true);
    } else {
      setMessage("");
      setBtnDisabled(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    register(formData)
      .then(() => navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="sign-up-title">
        <h1>Sign up</h1>
      </div>
      <div className="inputs-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          className="text"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          className="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          className="password"
          placeholder="Password"
        />
      </div>
      {message && <p className="error">{message}</p>}
      <div className="button-form">
        <button type="submit" disabled={btnDisabled}>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Register;
