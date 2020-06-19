import React from "react";
import User from "./User";
import UserForm from "./UserForm";

export default class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <User />
        <UserForm />
      </div>
    );
  }
}