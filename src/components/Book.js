import React from "react";

function Book(props) {
  const book = props.book;
  return (
    <div>
      <h1>{book.author}</h1>
      <p>{book.title}</p>
      <p>{book.pages}</p>
    </div>
  )
}

export default Book;
