import React from "react";
import "./styles.css";
import SurveyComponent from "./SurveyComponent";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <option>{props.value}</option>;
}

function SurveyList(props) {
  const numbers = props.questions;
  const listItems = questions.map(q => (
    // Correct! Key should be specified inside the array.
    <ListItem key={q.toString()} value={q} />
  ));
  return <select>{listItems}</select>;
}

const questions = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <div className="App" id="root">
      <h1>How is your experience today ?</h1>
      <SurveyComponent questions={questions} />
    </div>
  );
}
