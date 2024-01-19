import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book, role }) => {
  const { name, author, imageUrl, price, _id } = book;
  return (
    <div className="book-card">
      <img src={imageUrl} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>

      {role === "creator" && (
        <div className="book-actions">
          <Link to={`/book/${book._id}`}>Edit</Link>
          <Link to={`/delete/${book._id}`}>Delete</Link>
        </div>
      )}
    </div>
  );
};

export default BookCard;
