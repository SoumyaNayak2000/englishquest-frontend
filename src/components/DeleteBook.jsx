import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .delete("https://library-d18e.onrender.com/api/v1/book/delete/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/books");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
};

export default DeleteBook;
