import React from "react";
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h1>
          <b style={{ color: "blue" }}>Add a new issue:</b>
        </h1>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="subject">
            Issue_Subject: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="subject"
              value={this.props.newSubject}
              type="text"
              name="subject"
              onChange={this.props.handleInputChange}
              required="true"
            />
          </label>
          <label for="explanation">
            Issue_Explanation:&nbsp;
            <input
              id="explanation"
              value={this.props.newExplanation}
              type="text"
              name="explanation"
              onChange={this.props.handleInputChange}
              required="true"
            />
          </label>
          <label for="comment">
            Issue_Comment:&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="comment"
              value={this.props.newComment}
              type="text"
              name="comment"
              onChange={this.props.handleInputChange}
              required="true"
            />
          </label>
          <label for="contact">
            Immediate_Contact
            <input
              id="contact"
              value={this.props.newContact}
              type="text"
              name="contact"
              onChange={this.props.handleInputChange}
              required="true"
            />
          </label>
          <button type="submit" value="Save">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
