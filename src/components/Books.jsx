import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "../styles/books.scss";

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [records, setRecords] = useState([]);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://library-d18e.onrender.com/api/v1/book/getbooks")
      .then((res) => {
        console.log(res);
        setBooks(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filtering = (e) => {};

  return (
    <div className="book-list">
      {books.map((book) => {
        return <BookCard key={book._id} book={book} role={role} />;
      })}
    </div>
  );
};

export default Books;
