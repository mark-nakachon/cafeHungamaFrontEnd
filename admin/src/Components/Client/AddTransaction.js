import React from "react";
import "./ClientDetail.css";
import { Form, Row, Col, Input, Button } from "antd";

class AddTransactionForm extends React.Component {
    state = {
        clientid: this.props.clientid,
        pendingdues: this.props.pendingdues || "Not Avialable",
        amount: "",
        transaction_id: "",
        remarks: ""
    };

    onSubmit = event => {           // Function Will Call API
        event.preventDefault();
        //Send this object to API
      /*   const Request = {
            clientid: this.state.clientid,
            pendingdues: this.state.pendingdues,
            amount: this.state.amount,
            transaction_id: this.state.transaction_id,
            remarks: this.state.remarks
        } */
    };
    getFields() {
        const { getFieldDecorator } = this.props.form;
        const children = [];
        children.push(
            <Row style={{ marginLeft: "10px" }}>
                <Col span={3} className="colpad">
                    <Form.Item label="Client ID">
                        {getFieldDecorator("clientID")(
                            <Input
                                placeholder={this.state.clientid}
                                disabled
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span={3} className="colpad">
                    <Form.Item label="Pending Amount">
                        {getFieldDecorator("pendingdues")(
                            <Input
                                placeholder={this.state.pendingdues}
                                disabled
                            />
                        )}
                    </Form.Item>
                </Col>
                <Col span={3} className="colpad">
                    <Form.Item label="amount">
                        {getFieldDecorator("amount", {
                            rules: [
                                {
                                    required: true,
                                    message: "Enter Numbers Only",
                                    pattern: "[0-9]"
                                }
                            ]
                        })(<Input placeholder="Amount" />)}
                    </Form.Item>
                </Col>
                <Col span={3} className="colpad">
                    <Form.Item label="Transaction ID">
                        {getFieldDecorator("transaction_id", {
                            rules: [
                                {
                                    required: true,
                                    message: "Input something!"
                                }
                            ]
                        })(<Input placeholder="Enter Transaction ID" />)}
                    </Form.Item>
                </Col>

                <Col span={3} className="colpad">
                    <Form.Item label="Remarks">
                        {getFieldDecorator("remarks")(<Input placeholder="Remarks" />)}
                    </Form.Item>
                </Col>
                <Col span={2} style={{ marginTop: "40px" }}>
                    <Button type="primary" htmlType="submit">
                        Submit
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

const AddTrnsaction = Form.create({
    name: "add_transaction"
})(AddTransactionForm);
export default AddTrnsaction