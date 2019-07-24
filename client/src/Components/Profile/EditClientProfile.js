import React from 'react'
import { Form,  Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import API from '../../api/API';

class EditClientProfileForm extends React.Component {


 
 
   state={
      data:this.props.data        // data variable contains jason before and after Edit
   }
  onEdit=value=>{                    // This function  will Call the API (Post request)
    console.log(value)
    API.put('/client/5d09eb072f965c7314727e4b/profile',value)
    alert("Submitted",value);
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
              {getFieldDecorator("firstname", {
                rules: [
                  {
                    required: true,
                    message: 'First Name is Required',
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Last Name">
              {getFieldDecorator("lastname")(<Input />)}
            </FormItem>
            <FormItem label="Phone Number">
              {getFieldDecorator("phonenumber", {
                rules: [
                  {
                    required: true,
                    message: 'Phone Number is Required',
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Alternate Phone Number">
              {getFieldDecorator("alternatephonenumber")(<Input />)}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('line', {
                rules: [
                  {
                    required: true,
                    message: 'Address is Required',
                  }
                ]
              })(<Input placeholder="Line"/>)}
              {getFieldDecorator('city')(<Input placeholder="City"/>)}
              {getFieldDecorator('state', {
                rules: [
                  {
                    required: true,
                    message: 'State is Required',
                  }
                ]
              })(<Input Input placeholder="State"/>)}
              {getFieldDecorator('pincode', {
                rules: [
                  {
                    required: true,
                    message: 'Pincode is Required',
                  }
                ]
              })(<Input Input placeholder="Pincode"/>)}
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