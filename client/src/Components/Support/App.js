import React from "react";
import Form from "./Form";
import Table from "./Table";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      subject: "",
      explanation: "",
      comment: "",
      contact: "",
      items: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let data = [...this.state.items];

    data.push({
      subject: this.state.subject,
      explanation: this.state.explanation,
      comment: this.state.comment,
      contact: this.state.contact
    });
    console.log(data);
    this.setState({
      items: data,
      subject: "",
      explanation: "",
      comment: "",
      contact: ""
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newSubject={this.state.subject}
          newExplanation={this.state.explanation}
          newComment={this.state.comment}
          newContact={this.state.contact}
        />
        <br />
        <Table items={this.state.items} />
      </div>
    );
  }
}
export default App;
