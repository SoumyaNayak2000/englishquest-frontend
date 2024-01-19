import React, { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import axios from "axios";
import Loader from "./Loader";

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [creators, setCreators] = useState(0);
  const [books, setBooks] = useState(0);
  const [loading, setLoading] = useState(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8081/api/v1/creator/dashboard")
      .then((res) => {
        console.log(res);

        setCreators(res.data.creatorCount);
        setUsers(res.data.userCount);
        setBooks(res.data.bookCount);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="dashboard">
          <div className="dashboard-box">
            <h2>Total Books</h2>
            <br />
            <h2>{books}</h2>
          </div>
          <div className="dashboard-box">
            <h2>Total Users</h2>
            <br />
            <h2>{users}</h2>
          </div>
          <div className="dashboard-box">
            <h2>Total Creators</h2>
            <br />
            <h2>{creators}</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
