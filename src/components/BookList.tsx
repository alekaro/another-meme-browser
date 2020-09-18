import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import { useQuery } from "react-apollo";
import { List } from "semantic-ui-react";
import { Link } from "react-router-dom";

// components
import { BookDetails } from "./BookDetails";

const BookList = () => {
  const [selected, setSelected] = React.useState<any>(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    if (loading) {
      return <div style={{ color: "white" }}>Loading books...</div>;
    } else {
      return data.books.map((book: any) => {
        return (
          <List.Item
            as={Link}
            key={book.id}
            onClick={(e) => {
              setSelected(book.id);
            }}
          >
            {book.name}
          </List.Item>
        );
      });
    }
  };
  return (
    <div>
      <List inverted link size="big" id="book-list">
        {displayBooks()}
      </List>
      <BookDetails bookId={selected} />
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
