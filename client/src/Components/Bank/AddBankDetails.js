import React from 'react'
import { Form,  Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';


class AddBankDetailsForm extends React.Component {
   state={
      data: {}    // data variable contains jason after Edit
   }
  onEdit=data=>{                    // This function will Call the API (Post request)
    console.log(data)
    alert('Bank Details Added')
  }
  log = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({data:values})
        this.onEdit(values)
      }
    });
   
  };
  
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
         <Form layout="vertical" onSubmit={this.log} >
            <FormItem label="Bank" >
              {getFieldDecorator("bankname" ,{
                rules: [
                  {
                    required: true,
                    message: 'Bank Name is Required',
                  }
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="Account Number">
              {getFieldDecorator("accountnumber", {
                rules: [
                  {
                    required: true,
                    message: 'Account Number is Required',
                  }
                ]
                
              })(<Input />)}
            </FormItem>
            <FormItem label="Phone Number">
              {getFieldDecorator("phonenumber", {
                rules: [
                  {
                    required: true,
                    message: 'Phone Number is Required',
                  },{
                      max: 10,
                      message: "Phone Number is invalid"
                  }
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="IFSC Code">
              {getFieldDecorator("IFSC", {
                rules: [
                  {
                    required: true,
                    message: 'IFSC Code is Required',
                  }
                ],
              })(<Input />)}
            </FormItem>
            <FormItem label="Branch">
              {getFieldDecorator("branch" ,{
                rules: [
                  {
                    required: true,
                    message: 'Branch is Required',
                  }
                ],
              })(<Input />)}
            </FormItem>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
         </Form>
      </div>
    )
  }
}
const BankDetailsForm=Form.create()(AddBankDetailsForm)

export default BankDetailsForm