import React, { PropsWithChildren } from "react";
import { DataProps, graphql, MutateProps } from "react-apollo";
import { getBookQuery } from "../queries/queries";
import { useQuery } from "react-apollo";
import { List } from "semantic-ui-react";

export const BookDetails = (props: { bookId: any }) => {
  const bookId = props.bookId;

  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  const displayBookDetails = () => {
    if (data) {
      const { book } = data;

      if (book) {
        return (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <List>
              {book.author.books.map((item: any) => {
                return <List.Item key={item.id}>{item.name}</List.Item>;
              })}
            </List>
          </div>
        );
      }
    } else {
      return <div>No books selected...</div>;
    }
  };
  return (
    <div id="book-details">
      <p style={{ color: "white" }}>{displayBookDetails()}</p>
    </div>
  );
};

// export default graphql(getBookQuery)(BookDetails);
