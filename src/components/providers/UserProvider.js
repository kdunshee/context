import React from "react";

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

export default class UserProvider extends React.Component {
  state = {
    firstName: "Bilbo",
    lastName: "Baggins",
    age: 111,
   
    updateUser: (user) => this.updateUser(user),
  };

  updateUser = (user) => {
    this.setState({ ...user });
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}