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
  Grid,
  Card,
  Rating,
} from "semantic-ui-react";

const GamesPage = () => {
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
        <Header>Games</Header>
        <Grid>
          <Grid.Row columns="3">
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Tic-Tac-Toe</Card.Header>
                  <Card.Meta>Three in a Row</Card.Meta>
                  <Rating icon="star" defaultRating="3" maxRating="5"></Rating>
                  <Icon name="exclamation"></Icon>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Checkers</Card.Header>
                  <Card.Meta>Jumping Race</Card.Meta>
                  <Rating icon="star" defaultRating="3" maxRating="5"></Rating>
                  <Icon name="exclamation"></Icon>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Snakes & Ladders</Card.Header>
                  <Card.Meta>Three in a Row</Card.Meta>
                  <Rating icon="star" defaultRating="3" maxRating="5"></Rating>
                  <Icon name="exclamation"></Icon>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="3">
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Yahtzee</Card.Header>
                  <Card.Meta>Feeling Lucky?</Card.Meta>
                  <Rating icon="star" defaultRating="3" maxRating="5"></Rating>
                  <Icon name="exclamation"></Icon>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GamesPage;
