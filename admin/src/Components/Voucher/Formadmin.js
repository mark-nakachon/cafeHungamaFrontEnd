import React from "react";
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="vouchername">
            Voucher Name:
            <input
              id="vouchername"
              value={this.props.newVouchername}
              type="text"
              name="vouchername"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label for="amount">
            Voucher Amount:
            <input
              id="amount"
              value={this.props.newAmount}
              type="text"
              name="amount"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label for="description">
            Voucher Description:
            <input
              id="description"
              value={this.props.newDescription}
              type="text"
              name="description"
              onChange={this.props.handleInputChange}
            />
          </label>
          <button type="submit" value="Save">
            Add Item
          </button>
        </form>
        <h3> your input: {this.props.newVouchername}</h3>
      </div>
    );
  }
}

export default Form;
