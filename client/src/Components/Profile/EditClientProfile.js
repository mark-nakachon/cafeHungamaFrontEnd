import React from 'react'
import { Form,  Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import API from '../../api/API';

class EditClientProfileForm extends React.Component {

   state={
      data:this.props.data        // data variable contains jason before and after Edit
   }
  onEdit=async value=>{                    // This function  will Call the API (Post request)
    console.log(value)
    let profile={
      firstName:value.firstName,
      lastName:value.lastName,
      contact:value.contact,
      alternateContact:value.alternateContact,
      line1Add:value.line1Add,
      line2Add:value.line2Add,
      email:value.email
      }
    const response=await API.put('/client/5d368a7f4a915e2c58f34952/profile/',profile)
    .catch(function (error) {
      console.log(error);
    });
    alert("Submitted",value);
    console.log(response)
  }

  log = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({data:values},()=>this.onEdit(this.state.data))
      }
      //alert(this.state.data)
      // console.log(this.state.data)
    });
   
  };
  
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
         <Form layout="horizontal" onSubmit={this.log} >
            <FormItem label="First Name" >
              {getFieldDecorator("firstName", {
                rules: [
                  {
                    required: true,
                    message: 'First Name is Required',
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Last Name">
              {getFieldDecorator("lastName")(<Input />)}
            </FormItem>
            <FormItem label="Phone Number">
              {getFieldDecorator("contact", {
                rules: [
                  {
                    required: true,
                    message: 'Phone Number is Required',
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Alternate Phone Number">
              {getFieldDecorator("alternateContact")(<Input />)}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('line1Add', {
                rules: [
                  {
                    required: true,
                    message: 'Address is Required',
                  }
                ]
              })(<Input placeholder="Line"/>)}
              {getFieldDecorator('line2Add')(<Input Input placeholder="Line 2"/>)}
              {getFieldDecorator('city')(<Input placeholder="City"/>)}
              {getFieldDecorator('state', {
                rules: [
                  {
                    required: true,
                    message: 'State is Required',
                  }
                ]
              })(<Input Input placeholder="State"/>)}
            </FormItem>
            <FormItem label="Email">
              {getFieldDecorator('email', {
                rules: [
                  {
                    required: true,
                    message: 'Address is Required',
                  }
                ]
              })(<Input />)}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
         </Form>
      </div>
    )
  }
}
const EditClientProfile=Form.create()(EditClientProfileForm)

export default EditClientProfile