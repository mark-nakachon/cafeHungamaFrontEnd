import React from "react";
class Form extends React.Component {
  state = {
    issue_subject: "",
    issue_comment: "",
    issue_explanation: "",
    immediate_contact: ""
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
      issue_subject: this.state.issue_subject,
      issue_comment: this.state.issue_comment,
      issue_explanation: this.state.issue_explanation,
      immediate_contact: this.state.immediate_contact
    });
    this.props.handleFormSubmit(data);
    this.setState({
      issue_subject: "",
      issue_comment: "",
      issue_explanation: "",
      immediate_contact: ""
    });
  };
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="issue_subject">
            Issue Subject: &nbsp;&nbsp;
            <input
              id="issue_subject"
              value={this.state.issue_subject}
              type="text"
              name="issue_subject"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <label htmlFor="issue_explanation">
            Issue Explanation: &nbsp;&nbsp;
            <input
              id="issue_explanation"
              value={this.state.issue_explanation}
              type="text"
              name="issue_explanation"
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label htmlFor="issue_comment">
            Issue Comment: &nbsp;&nbsp;
            <input
              id="issue_comment"
              value={this.state.issue_comment}
              type="text"
              name="issue_comment"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <label htmlFor="immediate_contact">
            Immediate Contact: &nbsp;&nbsp;
            <input
              id="immediate_contact"
              value={this.state.immediate_contact}
              type="text"
              name="immediate_contact"
              onChange={this.handleInputChange}
            />
          </label>
          &nbsp;&nbsp;
          <button type="submit" value="Save">
            Add Issue
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
