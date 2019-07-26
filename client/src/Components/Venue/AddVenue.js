import React from 'react';
import {Form,Button,Upload,Icon,Checkbox,Row,Col,Input} from 'antd';
import './Modal.css';

class Demo extends React.Component {
  state ={
    venueName:"",
    venueContact:"",
    city:"",
    state:"",
    pinCode:"",
    noOfScreens: "",
    line1:"",
    country:"",
    landmark:"",
    eventType:"",
    amenties:"",
    image:""
  }
  onInputChange =e=>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    const data=[];
    data.push({
      venueName: this.state.venueName,
      venueContact: this.state.venueContact,
      city: this.state.city,
      state: this.state.state,
      line1: this.state.line1,
      pinCode: this.state.pinCode,
      noOfScreens: this.state.noOfScreens,
      country: this.state.country,
      landmark: this.state.landmark,
      eventType: this.state.eventType,
      amenties: this.state.amenties,
      image: this.state.image
    })
    this.props.onSubmit(data);
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
          })(<Input placeholder="Please input your name" required name="venueName" onChange={this.onInputChange} />)}
        </Form.Item>
      
        <Form.Item label="No of Screens">
              {getFieldDecorator('no-of-screen', { initialValue: 0 })(<Input pattern="[1-9]" min={1} name="noOfScreens" onChange={this.onInputChange}/>)}
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
        })(<Input placeholder="Please input your line 1" name="line1" onChange={this.onInputChange}/>)}
        </Form.Item>

        <Form.Item label="City">
        {getFieldDecorator('city', {
            rules: [
              {
                required: true,
                message: 'Please input your city',
              },
            ],
        })(<Input placeholder="Please input your city" name="city" onChange={this.onInputChange}/>)}
        </Form.Item>

        <Form.Item label="State">
        {getFieldDecorator('state', {
            rules: [
              {
                required: true,
                message: 'Please input your state',
              },
            ],
        })(<Input placeholder="Please input your state" name="state" onChange={this.onInputChange}/>)}
        </Form.Item>

        <Form.Item label="Country">
        {getFieldDecorator('country', {
            rules: [
              {
                required: true,
                message: 'Please input your country',
              },
            ],
        })(<Input placeholder="Please input your country" name="country" onChange={this.onInputChange}/>)}
        </Form.Item>

        <Form.Item label="Pin code">
          {getFieldDecorator('pin', {
            rules: [
              {
                required: true,
                message: 'Please input your pin code',
              },
            ],
          })(<Input pattern="[0-9]{6}" maxLength={6} name="pinCode" onChange={this.onInputChange}/>)}
        </Form.Item>


        <Form.Item label="Landmark">
        {getFieldDecorator('landmark', {
            rules: [
              {
                required: false,
                message: 'Please input landmark',
              },
            ],
          })(<Input placeholder="Please input your landmark" name="landmark"/>)}
        </Form.Item>

        <Form.Item label="Phone no">
              {getFieldDecorator('phone')(<Input pattern="[1-9][0-9]{9}" maxLength={10} name="venueContact" required onChange={this.onInputChange}/>)}
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