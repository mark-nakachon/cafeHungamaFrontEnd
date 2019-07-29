import React from "react";
class Form extends React.Component {
  state = {
    vouchername: "",
    amount: "",
    description: "",
    validity: "",
    applicable: "First Time Users"
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
      description: this.state.description,
      validity: this.state.validity,
      applicable: this.state.applicable
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
          <label htmlFor="validity">
            Validity: &nbsp;&nbsp;
            <input
              id="validity"
              value={this.state.validity}
              type="date"
              name="validity"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <br />
          <label htmlFor="applicable">
            Applicable For: &nbsp;&nbsp;
            <select
              onChange={this.handleInputChange}
              defaultValue="First Time Users"
              name="applicable"
            >
              <option value="First Time Users" selected>
                First Time Users
              </option>
              <option value="All Users">All Users</option>
            </select>
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
