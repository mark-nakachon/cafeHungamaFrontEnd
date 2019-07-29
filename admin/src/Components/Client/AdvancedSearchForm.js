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
  handleChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = event => {
    event.preventDefault();
    //this.props.onSubmit(this.state.firstName);
    const data = [];
    data.push({
      email: this.state.email,
      firstName: this.state.firstName,
      userName: this.state.userName,
      companyName: this.state.companyName,
      contact: this.state.contact,
      venueName: this.state.venueName
    });
    this.props.onSubmit(data); //send data here
  };
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
    children.push(
      <Row style={{ marginLeft: "10px"}} key="userName">
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
            })(<Input placeholder="Enter Email" onChange={this.handleChange} name="email" />)}
          </Form.Item>
        </Col>
        <Col span={3} className="colpad">
          <Form.Item label="First Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="Enter Name" name="firstName" onChange={this.handleChange}/>)}
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
            })(<Input placeholder="Enter Contact no" pattern="[1-9][0-9]{9}" name="contact" onChange={this.handleChange}/>)}
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
            })(<Input placeholder="Enter Company name" name="companyName" onChange={this.handleChange}/>)}
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
            })(<Input placeholder="Enter User name" name="userName" onChange={this.handleChange}/>)}
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
            })(<Input placeholder="Enter Venue" name="venueName" onChange={this.handleChange}/>)}
          </Form.Item>
        </Col>
        <Col span={2} style={{ marginTop: "40px" }}>
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
        <Row gutter={17}>{this.getFields()}</Row>
      </Form>
    );
  }
}

export const WrappedAdvancedSearchForm = Form.create({
  name: "advanced_search"
})(AdvancedSearchForm);
