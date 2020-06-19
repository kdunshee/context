import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { UserContext } from "./providers/UserProvider";

export default function UserForm() {
  const user = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age)
  

  function handleSubmit(e) {
    e.preventDefault();
    user.updateUser({
      firstName,
      lastName,
      age,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Enter First name"
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Form.Input
        label="Enter Last name"
        name="lastName"
        value={lastName}
        onChange={(e, { value }) => setLastName(value)}
      />
     
     <Form.Input
        label="Enter Age"
        name="age"
        value={age}
        onChange={(e, { value }) => setAge(value)}
      />
      <Form.Button color = "green">Submit</Form.Button>
    </Form>
  );
}
