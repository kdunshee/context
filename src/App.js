import React from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import UserProfile from "./components/UserProfile";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <>
      <AppContainer> 
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/user/profile" component={UserProfile} />
          
        </Switch>
      </Container>

    </AppContainer>
    </>
  );
}

const AppContainer = styled.div `
background: rgb(0,212,255);
background: linear-gradient(90deg, rgba(0,212,255,1) 10%, rgba(9,121,66,1) 48%, rgba(9,37,121,1) 90%, rgba(2,0,36,1) 98%)`;
export default App;