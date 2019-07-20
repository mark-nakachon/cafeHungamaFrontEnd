import React from "react";
import Form from "./Formadmin";
import Table from "./Tabadmin";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      vouchername: "",
      amount: "",
      description: "",
      items: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    let data = [...this.state.items];

    data.push({
      vouchername: this.state.vouchername,
      amount: this.state.amount,
      description: this.state.description
    });
    console.log(data);
    this.setState({
      items: data,
      vouchername: "",
      amount: "",
      description: ""
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
          newVouchername={this.state.vouchername}
          newAmount={this.state.amount}
          newDescription={this.state.description}
        />
        <br />
        <Table items={this.state.items} />
        
      </div>
    );
  }
}
export default App;
