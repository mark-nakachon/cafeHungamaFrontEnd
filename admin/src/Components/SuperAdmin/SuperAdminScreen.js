import React from 'react'
import ReqTable from './Table'
import { Form, Icon, Input, Button } from 'antd';


const handleSubmit = value => {
  alert("Dude")
  console.log(value)
}

class SuperAdminScreen extends React.Component {
  state = {
    EmployeeData: []
  }
  componentDidMount() {
    this.setState({
      EmployeeData: [ //this will be replaced by api for Employee data
        {
          EmployeeID: '1',
          Name: 'John Brown',
          PhoneNo: 32,
          Email: "Employee@getMaxListeners.com",
        }
      ]
    })
  }
  render() {

    return (
      <div>
        <h1>
          SuperAdmin.NAME
                </h1>
        <p>Add Admin</p>
        <AddEmployee />

        <p style={{ margin: "10px 0 0" }}>List of Admins</p>
        <ReqTable
          column1="EmployeeID" column2="Name" column3="PhoneNo" column4="Email" column5="Details"
          data={this.state.EmployeeData}
        />
      </div>
    )
  }
}
class AddEmployeeForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        handleSubmit(values)
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{
        width: "400px",
        border: "none",
      }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('employeeID', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Employee ID"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">Add</Button>
        </Form>
      </div>
    );
  }
}

const AddEmployee = Form.create({ name: 'addEmployeeForm' })(AddEmployeeForm);

export default SuperAdminScreen