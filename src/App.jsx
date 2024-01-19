import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Books from "./components/Books";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Logout from "./components/Logout";
import axios from "axios";
import Addbooks from "./components/Addbooks";
import EditBook from "./components/EditBook.jsx";
import DeleteBook from "./components/DeleteBook.jsx";

const App = () => {
  const [role, setRole] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8081/api/v1/auth/verify").then((res) => {
      console.log(res);
      if (res.data.login) {
        setRole(res.data.role);
      } else {
        setRole("");
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setRoleVar={setRole} />} />
        <Route path="/books" element={<Books role={role} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/logout" element={<Logout setRole={setRole} />} />
        <Route path="/addbook" element={<Addbooks />} />
        <Route path="/book/:id" element={<EditBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
