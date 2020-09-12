import React from "react";
import { Container, Modal, Button, Header, Image, Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const LoginModal = () => {
  const [open, setOpen] = React.useState(false)
  const [login, setLogin] = React.useState();
  const [password, setPassword] = React.useState();

  const handleChange = (e, { name, value }) => {
    name = value
  }

  const handleSubmit = () => {

  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button inverted secondary>Log in</Button>}
    >
      <Modal.Content>
        <Form>
          <Form.Group>
            <Form.Input
              placeholder='Login'
              name='login'
              value={login}
            />
            <Form.Input
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  );
}