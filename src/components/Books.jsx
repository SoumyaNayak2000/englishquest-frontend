import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "../styles/books.scss";
import Loader from "./Loader";

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8081/api/v1/book/getbooks")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setBooks(res.data);
        setRecords(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const filtering = (e) => {};

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="book-list">
          {books?.map((book) => {
            return <BookCard key={book._id} book={book} role={role} />;
          })}
        </div>
      )}
    </>
  );
};

export default Books;
