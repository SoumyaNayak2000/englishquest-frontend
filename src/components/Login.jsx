import { useState } from "react";
import axios from "axios";
import "../styles/login.scss";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Login = ({ setRoleVar }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    console.log("login clicked");
    setLoading(true);
    axios
      .post("http://localhost:8081/api/v1/auth/login", {
        username,
        password,
        role,
        email,
        phone,
        age,
        address,
      })
      .then((res) => {
        console.log(res);
        if (res.data.login && res.data.role === "creator") {
          setRoleVar("creator");
          setLoading(false);
          navigate("/dashboard");
        } else if (
          (res.data.login && res.data.role === "user") ||
          res.data.registered
        ) {
          setRoleVar("user");
          setLoading(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="login-page">
          <div className="login-container">
            <h2>Login</h2>
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
              <label>Phone : </label>
              <input
                type="tel"
                placeholder="Enter Phone no"
                onChange={(e) => setPhone(e.target.value)}
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

            {role === "creator" && (
              <>
                <div className="form-group">
                  <label>Age : </label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Address : </label>
                  <input
                    type="text"
                    placeholder="HN-xyz, dist-abc "
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Role : </label>
              <select
                name="role"
                id="role"
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Select an Option</option>
                <option value="creator">Creator</option>
                <option value="user">User</option>
              </select>
            </div>

            <button className="btn-login" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
