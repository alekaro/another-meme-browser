import React, { ChangeEvent } from "react";
import { Container, Modal, Form, InputOnChangeData } from "semantic-ui-react";

export const Register = () => {

  const [open, setOpen] = React.useState(false)
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
    setPassword(data.value);
  }

  const handleSubmit = () => {

  }

  return (
    <div style={{backgroundColor: "#999999", margin: "20px"}}>
      <Form style={{padding: "30px"}}>
          <Form.Input
            placeholder='Login'
            name='login'
            value={login}
            onChange={handleChange}
            width={6}
          />
          <Form.Input
            placeholder='Password'
            name='password'
            value={password}
            onChange={handleChange}
            width={6}
          />
          <Form.Button content="Submit" />
      </Form>
    </div>
  );
};