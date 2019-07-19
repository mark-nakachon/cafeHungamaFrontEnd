import React from 'react';
import {Form,InputNumber,Button,Upload,Icon,Checkbox,Row,Col,Input} from 'antd';
import './Modal.css';

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Row>
          <Col span={12}>
        <Form.Item label="Name">
        {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: 'Please input your name',
              },
            ],
          })(<Input placeholder="Please input your name" />)}
        </Form.Item>
      
        <Form.Item label="No of Screens">
          {getFieldDecorator('input-number', { initialValue: 0 })(<InputNumber min={1} />)}
        </Form.Item>

        <Form.Item label="Event Arrangement">
          {getFieldDecorator('event-arrange')(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>

        <Form.Item label="Line 1">
        {getFieldDecorator('line1', {
            rules: [
              {
                required: true,
                message: 'Please input line1',
              },
            ],
          })(<Input placeholder="Please input your line 1" />)}
        </Form.Item>

        <Form.Item label="Line 2">
        {getFieldDecorator('line2')(<Input placeholder="Please input your line 2" />)}
        </Form.Item>

        <Form.Item label="City">
        {getFieldDecorator('city', {
            rules: [
              {
                required: true,
                message: 'Please input your city',
              },
            ],
          })(<Input placeholder="Please input your city" />)}
        </Form.Item>

        <Form.Item label="State">
        {getFieldDecorator('state', {
            rules: [
              {
                required: true,
                message: 'Please input your state',
              },
            ],
          })(<Input placeholder="Please input your state" />)}
        </Form.Item>

        <Form.Item label="Country">
        {getFieldDecorator('country', {
            rules: [
              {
                required: true,
                message: 'Please input your country',
              },
            ],
          })(<Input placeholder="Please input your country" />)}
        </Form.Item>

        <Form.Item label="Pin code">
          {getFieldDecorator('pin', {
            rules: [
              {
                required: true,
                message: 'Please input your pin code',
              },
            ],
          })(<InputNumber maxLength={6} />)}
        </Form.Item>


        <Form.Item label="Landmark">
        {getFieldDecorator('landmark', {
            rules: [
              {
                required: true,
                message: 'Please input landmark',
              },
            ],
          })(<Input placeholder="Please input your landmark" />)}
        </Form.Item>

        <Form.Item label="Phone no">
          {getFieldDecorator('phone')(<InputNumber maxLength={10} />)}
        </Form.Item>
        </Col>
         <Col span={12}>

        <Form.Item label="Select Amenties">
          {getFieldDecorator('amenties')(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>

        <Form.Item label="Upload Image" >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
        </Col>
         </Row>
         <Row>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Row>
      </Form>

    );
  }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

//ReactDOM.render(<WrappedDemo />, mountNode);
export default WrappedDemo;