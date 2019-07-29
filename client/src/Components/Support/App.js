import React from "react";
import Form from "./Form";
import Table from "./Table";
//import axios from "axios";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  handleFormSubmit = props => {
    this.setState({
      items: props[0]
    });
    console.log(this.state.items);
  };
  render() {
    return (
      <div className="App">
        <Form handleFormSubmit={this.handleFormSubmit} />
        <br />
        <Table items={this.state.items} />
      </div>
    );
  }
}
export default App;
