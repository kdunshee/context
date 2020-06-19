import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { UserContext } from "./providers/UserProvider";

const User = () => {
 
  const { firstName, lastName, age } = useContext(UserContext);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{firstName}</Card.Header>
        <Card.Header> {lastName}</Card.Header>
        <Card.Meta>{age}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default User;