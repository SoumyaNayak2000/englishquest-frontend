import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand" onClick={() => navigate("/")}>
          English Quest
        </span>
      </div>
      <div className="navbar-right">
        <Link to="/books">Books</Link>
        {role === "creator" && (
          <>
            <Link to="/addbook">Add Book</Link>
            <Link to="/adduser">Add User</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
        {role === "" ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
