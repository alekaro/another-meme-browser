import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import { useQuery } from "react-apollo";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div style={{ color: "white" }}>Loading books...</div>;
    } else {
      return data.books.map((book: any) => {
        return (
          <li style={{ color: "white" }} key={book.id}>
            {book.name}
          </li>
        );
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
