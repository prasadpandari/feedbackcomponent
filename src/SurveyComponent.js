import React, { Component } from "react";
import "./styles.css";
import { Form, Radio, Button } from "semantic-ui-react";

const qlist = [
  {
    feedback: 1,
    desc: "I could not complete my work due to system disruption."
  },
  {
    feedback: 2,
    desc: "I encountered a disruption, but was able to find a new workaround."
  },
  {
    feedback: 3,
    desc: "I encountered a disruption, but already knew a workaround."
  },
  {
    feedback: 4,
    desc: "I completed my work but the user experience can be improved."
  },
  { feedback: 5, desc: "I completed my work successfully." }
];

const payload = {
  username: "ppandari",
  fullName: "Prasad Pandari",
  email: "test@123.com",
  app: "Freedom",
  event: "sign-off",
  reportDate: "6/29/2020",
  feedback: 5,
  comment: "testing post from component",
  metadata: {
    wonum: "123456"
  }
};

const getListItems = (checkedValue, handleChange) => {
  const c = [];
  qlist.forEach(item => {
    console.log("item" + item);

    c.push(
      <Form.Field>
        <Radio
          label={item.desc}
          name="radioGroup"
          value={item.feedback}
          checked={checkedValue === item.feedback}
          onChange={handleChange}
        />
      </Form.Field>
    );
  });
  console.log(c);
  return c;
};

export default class SurveyComponent extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  handleClick = () => {
    const newUrl = new URL(
      "https://absxternal.azure-api.net/general/FeedbackFunc"
    );
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    };
    fetch(newUrl, postOptions)
      .then(res => res.json())
      .then(res => {
        alert(JSON.stringify(res));
      });
  };

  render() {
    const listItems = getListItems(this.state.value, this.handleChange);
    return (
      <div className="survey">
        <Form>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          {listItems}
        </Form>
        <br />
        <Button onClick={this.handleClick}>Submit</Button>
      </div>
    );
  }
}
