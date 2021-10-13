import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Menu,
  Container,
  Header,
  Button,
  Segment,
  Icon,
  MenuItem,
} from "semantic-ui-react";

const HomePage = () => {
  return (
    <React.Fragment>
      <Menu>
        <Menu.Item>
          <Icon name="home"></Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name="gamepad"></Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name="users"></Icon>
        </Menu.Item>
      </Menu>

      <Container>
        <Segment textAlign="center">
          <Header>Home</Header>
          <p>Text Needs not readen.</p>
          <Button color="green">Join Now!</Button>
        </Segment>
        <Header>News</Header>
        Some News
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
