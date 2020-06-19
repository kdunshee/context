import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { UserConsumer } from "./providers/UserProvider";

const Navbar = () => {
  return (
    <UserConsumer>
      {(value) => (
        <Menu>
          <NavLink to="/">
            <Menu.Item>Home</Menu.Item>
          </NavLink>
          <NavLink to="/user/profile">
            <Menu.Item>User Info </Menu.Item>
          </NavLink>
          
        </Menu>
      )}
    </UserConsumer>
  );
};

export default Navbar;