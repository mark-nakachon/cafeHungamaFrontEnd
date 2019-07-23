import React from "react";
class Form extends React.Component {
  state = {
    vouchername: "",
    amount: "",
    description: ""
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const data = [];
    data.push({
      vouchername: this.state.vouchername,
      amount: this.state.amount,
      description: this.state.description
    });
    this.props.handleFormSubmit(data);
    this.setState({
      vouchername: "",
      amount: "",
      description: ""
    });
  };
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="vouchername">
            Voucher Name: &nbsp;&nbsp;
            <input
              id="vouchername"
              value={this.state.vouchername}
              type="text"
              name="vouchername"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <label htmlFor="amount">
            Voucher Amount: &nbsp;&nbsp;
            <input
              id="amount"
              value={this.state.amount}
              type="text"
              name="amount"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <label htmlFor="description">
            Voucher Description: &nbsp;&nbsp;
            <input
              id="description"
              value={this.state.description}
              type="text"
              name="description"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <button type="submit" value="Save">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
