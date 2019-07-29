import React from "react";
import "./ClientDetail.css";
import { Form, Row, Col, Input, Button } from "antd";

class AdvancedSearchForm extends React.Component {
  state = {
    email: "",
    firstName: "",
    contact: "",
    companyName: "",
    userName: "",
    venueName: ""
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.firstName);
  };
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Row style={{ marginLeft: "10px" }}>
        <Col span={3} className="colpad">
          <Form.Item label="Email">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  required: false,
                  message: "Input email id only!"
                }
              ]
            })(<Input placeholder="Enter Email" type="email" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label=" Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Name" name="firstName"/>)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="Phone no">
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Phone no" name="contact"/>)}
          </Form.Item>
        </Col>

        <Col span={3} className="colpad">
          <Form.Item label="Company name">
            {getFieldDecorator("company", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Company name" name="companyName" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="User name">
            {getFieldDecorator("username", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter User name" name="userName"/>)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="Venue">
            {getFieldDecorator("venue", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Venue" name="venueName"/>)}
          </Form.Item>
        </Col>
        <Col span={2} style={{ marginTop: "40px" }}>
          <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
            Search
          </Button>
        </Col>
      </Row>
    );

    return children;
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.onSubmit}>
        <Row gutter={17}>{this.getFields()}</Row>
      </Form>
    );
  }
}

export const WrappedAdvancedSearchForm = Form.create({
  name: "advanced_search"
})(AdvancedSearchForm);
