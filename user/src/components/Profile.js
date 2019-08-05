import React, { Component } from 'react'
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
class Profile extends React.Component {

  state = {
      firstName:'',
      lastName:'',
      userName:'',
      email:'',
      city:'',
      address:'',
      contact:''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
       }
    }
    )
    };
  componentDidMount(){
    const bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkNDFiY2Q2MzZhYWU3Mzg0MTZmZGQxMSIsImVtYWlsIjoiaGFyaXNoY2hlbm51cGF0aTJAZ21haWwuY29tIn0sImlhdCI6MTU2NDY2MDE4MX0.bO90AbCLVJY3P9UPX3x8WKYTl4FW3Glt-XTMeieyifg';
    fetch(`http://localhost:5000/user/profile/:id`,{
        method:'GET',
        headers:{
            'Authorization':bearer
        }
    })
    .then(response=>response.json())
    .then(data=>{
        this.setState({loading:false,
        firstName:data.firstName,
        lastName:data.lastName,
        userName:data.userName,
        email:data.email,
        city:data.city,
        address:data.address,
        contact:data.contact
        })
    })
    .catch(err=>{
        console.log(err);
    })
  }
  render() {
     const {firstName,lastName,userName,email,city,address,contact} = this.state;
     const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Form onSubmit={this.handleSubmit} {...formItemLayout} className="login-form">
        <Form.Item label="First Name">
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your firstName!' }],
            initialValue:firstName
            })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"

            />,
          )}
        </Form.Item>
        <Form.Item label="Last Name">
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
        <Form.Item label="User Name">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your user Name!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="User Name"
            />,
          )}
        </Form.Item>
        <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item label="City">
          {getFieldDecorator('city', {
            rules: [{ required: true, message: 'Please enter your city!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="City"
            />,
          )}
        </Form.Item>
        <Form.Item label="Address">
          {getFieldDecorator('Address', {
            rules: [{ required: true, message: 'Please input your Address!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Address"
            />,
          )}
        </Form.Item>

        <Form.Item label="Contact number">
          {getFieldDecorator('contact', {
            rules: [{ required: true, message: 'Please input your Contact number!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="number"
              placeholder="Contact no"
            />,
          )}
        </Form.Item>


        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
      </Row>

    );
  }
}

const WrappedNormalProfileForm = Form.create({ name: 'update_profile' })(Profile);

export default WrappedNormalProfileForm;