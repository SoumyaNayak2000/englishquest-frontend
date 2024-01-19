import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/addUser.scss";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const EditBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://englishquest-backend.vercel.app/api/v1/book/edit/" + id)
      .then((res) => {
        console.log(res);
        setName(res.data.book.name);
        setAuthor(res.data.book.author);
        setImgUrl(res.data.book.imageUrl);
        setPrice(res.data.book.price);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked update book btn");
    axios
      .put("https://englishquest-backend.vercel.app/api/v1/book/update/" + id, {
        name,
        author,
        imageUrl,
        price,
      })
      .then((res) => {
        console.log(res);
        if (res.data.updated) {
          navigate("/books");
          setLoading(false);
        } else {
          setLoading(false);
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="user-form-container">
          <form className="user-form">
            <h2>Edit Book</h2>
            <br />
            <div className="form-group">
              <label>Book Name : </label>
              <input
                type="text"
                placeholder="Enter Book Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Author : </label>
              <input
                type="text"
                placeholder="Enter Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Image Url : </label>
              <input
                type="text"
                placeholder="Image Url"
                value={imageUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price : </label>
              <input
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <button className="btn-login" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditBook;
