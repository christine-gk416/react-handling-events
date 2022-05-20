import React from "react";
import Book from "./Book";

function RenderingLists() {
  const bookList = [
    "to kill a mockingbird",
    "the great gatsby",
    "catcher in the rye",
  ];

  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      pages: 201,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      pages: 216,
    },
    {
      title: "Catcher in the Rye",
      author: "J.d. Sallinger",
      pages: 214,
    },
  ];

  return (
    <div>
      {bookList.map((book) => {
        return <h2 key={book}>{book}</h2>;
      })}
      <hr />
      {books.map((book) => {
        return (
          <div key={book.title}>
            <h1>{book.author}</h1>
            <p>{book.title}</p>
            <p>{book.pages}</p>
          </div>
        );
      })}
      <hr />
      {books.map((book) => {
        return <Book book={book} key={book.title}/>;
      })}
    </div>
  );
}

export default RenderingLists;
