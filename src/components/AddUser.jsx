import React, { useState } from "react";
import axios from "axios";
import "../styles/addUser.scss";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("clicked register btn");
    axios
      .post("https://englishquest-backend.vercel.app/api/v1/adduser/register", {
        username,
        email,
        password,
        phone,
      })
      .then((res) => {
        if (res) {
          setLoading(false);
          console.log(res);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="user-form-container">
          <form className="user-form">
            <h2>Add User</h2>
            <br />
            <div className="form-group">
              <label>Username : </label>
              <input
                type="text"
                placeholder="Enter Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email : </label>
              <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password : </label>
              <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone No : </label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button className="btn-login" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
