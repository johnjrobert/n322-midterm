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
  Form,
  Input,
  TextArea,
} from "semantic-ui-react";

const ContactPage = () => {
  const [input, setInput] = React.useState("");
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
        <Header>Contact Us!</Header>
        <Form>
          <Form.Field
            control={Input}
            fluid
            placeholder="Please Enter Your Full Name..."
            label="Full Name"
          />

          <Form.Field
            control={Input}
            fluid
            placeholder="Enter the Best Email to Contact You With..."
            label="Contact Email:"
          />

          <Form.Field
            control={TextArea}
            fluid
            placeholder="Enter Your Message..."
            label="Message:"
          />

          <Button color="green">Send Message</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};
export default ContactPage;
