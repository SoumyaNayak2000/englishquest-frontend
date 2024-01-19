import React, { useState } from "react";
import axios from "axios";
import "../styles/addUser.scss";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const Addbooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked add book btn");
    setLoading(true);
    axios
      .post("https://englishquest-backend.vercel.app/api/v1/book/add", {
        name,
        author,
        imageUrl,
        price,
      })
      .then((res) => {
        console.log(res);
        if (res.data.bookAdded) {
          setLoading(false);
          navigate("/books");
        } else {
          setLoading(false);
          console.log(res);
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
            <h2>Add Book</h2>
            <br />
            <div className="form-group">
              <label>Book Name : </label>
              <input
                type="text"
                placeholder="Enter Book Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Author : </label>
              <input
                type="text"
                placeholder="Enter Author Name"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image Url : </label>
              <input
                type="text"
                placeholder="Image Url"
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price : </label>
              <input
                type="number"
                placeholder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button className="btn-login" onClick={handleSubmit}>
              Add Book
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Addbooks;
