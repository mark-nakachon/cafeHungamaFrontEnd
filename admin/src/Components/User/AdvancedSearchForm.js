import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

class AdvancedSearchForm extends React.Component {
  state = {
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    contact: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const data = [];
    data.push({
      userName: this.state.userName,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      contact: this.state.contact
    });
    this.props.onSubmit(data); //send data here
  };
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Row style={{ marginLeft: "20px" }} key="userName">
        <Col span={4}>
          <Form.Item label="User Name">
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(
              <Input
                placeholder="Enter user name"
                onChange={this.handleChange}
                name="userName"
              />
            )}
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  required: false,
                  message: "Input valid email id!"
                }
              ]
            })(
              <Input
                placeholder="Enter Email"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <Form.Item label="First Name">
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: false,
                  message: "Input name!"
                }
              ]
            })(
              <Input
                placeholder="Enter First Name"
                pattern="[a-zA-Z ]+"
                name="firstName"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <Form.Item label="Last Name">
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: false,
                  message: "Input name!"
                }
              ]
            })(
              <Input
                placeholder="Enter Last Name"
                pattern="[a-zA-Z ]+"
                name="lastName"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={4}>
          <Form.Item label="Contact no">
            {getFieldDecorator("contact", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(
              <Input
                placeholder="Enter contact no"
                pattern="[1-9][0-9]{9}"
                name="contact"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
        </Col>
        <Col span={2}>
          <Form.Item label="">
            <Button htmlType="submit" type="primary">
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
    );

    return children;
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.onSubmit}>
        <Row>
          <Col span={30}>{this.getFields()}</Col>
        </Row>
      </Form>
    );
  }
}

export const WrappedAdvancedSearchForm = Form.create({
  name: "advanced_search"
})(AdvancedSearchForm);
