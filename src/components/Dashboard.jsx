import React, { useState, useEffect } from "react";
import "../styles/dashboard.scss";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [creators, setCreators] = useState(0);
  const [books, setBooks] = useState(0);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://library-d18e.onrender.com/api/v1/creator/dashboard")
      .then((res) => {
        console.log(res);
        setCreators(res.data.creatorCount);
        setUsers(res.data.userCount);
        setBooks(res.data.bookCount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
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
  );
};

export default Dashboard;
