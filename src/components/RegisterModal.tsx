import React, { ChangeEvent, FormEvent, SyntheticEvent } from "react";
import {
  Button,
  DropdownItemProps,
  DropdownProps,
  Form,
  InputOnChangeData,
  Modal,
} from "semantic-ui-react";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";
import { useQuery, useMutation } from "react-apollo";

export const RegisterModal = () => {
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [name, setName] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [authorId, setAuthorId] = React.useState<any>("");

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBookMutationFunction, addBookMutationData] = useMutation(
    addBookMutation
  );

  const displayAuthors = () => {
    // return [{}];
    if (loading) {
      return [{}];
    } else {
      return data.authors.map((author: any) => {
        return { key: author.id, value: author.id, text: author.name };
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBookMutationFunction({
      variables: { name: name, genre: genre, authorId: authorId },
    });
    console.log({ login, password, name, genre, authorId });
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button inverted secondary>
          Sign Up
        </Button>
      }
    >
      <Modal.Content>
        <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
          <Form.Input
            placeholder="Login"
            name="login"
            value={login}
            onChange={(
              e: ChangeEvent<HTMLInputElement>,
              data: InputOnChangeData
            ) => {
              setLogin(data.value);
              // console.log(login);
            }}
            width={6}
          />
          <Form.Input
            placeholder="Password"
            name="password"
            value={password}
            onChange={(
              e: ChangeEvent<HTMLInputElement>,
              data: InputOnChangeData
            ) => {
              setPassword(data.value);
              // console.log(password);
            }}
            width={6}
          />
          <Form.Input
            placeholder="Name"
            name="name"
            value={name}
            onChange={(
              e: ChangeEvent<HTMLInputElement>,
              data: InputOnChangeData
            ) => {
              setName(data.value);
              // console.log(name);
            }}
            width={6}
          />
          <Form.Input
            placeholder="Genre"
            name="genre"
            value={genre}
            onChange={(
              e: ChangeEvent<HTMLInputElement>,
              data: InputOnChangeData
            ) => {
              setGenre(data.value);
              // console.log(genre);
            }}
            width={6}
          />
          <Form.Select
            placeholder="Author"
            name="authorId"
            value={authorId}
            onChange={(
              e: SyntheticEvent<HTMLElement, Event>,
              data: DropdownProps
            ) => {
              setAuthorId(data.value);
            }}
            width={6}
            options={displayAuthors()}
          />
          <Form.Button content="Submit" />
        </Form>
      </Modal.Content>
    </Modal>
  );
};
