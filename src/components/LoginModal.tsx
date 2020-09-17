import React, { ChangeEvent } from "react";
import { Modal, Button, Form, InputOnChangeData } from "semantic-ui-react";

export const LoginModal = () => {
  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => {
    setPassword(data.value);
  };

  const handleSubmit = () => {};

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button inverted secondary>
          Log in
        </Button>
      }
    >
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input
              placeholder="Login"
              name="login"
              value={login}
              onChange={handleChange}
            />
            <Form.Input
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </Modal.Content>
      {/* <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
          <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
          <Modal.Description>
          <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
          Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions> */}
    </Modal>
  );
};
