import React from "react";
import { Card, Select, Row, Col } from "antd";
import "./booking.css";
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class AddBookingFilters extends React.Component {
  state = {
    visible: true
  };
  onChange = e => {
    if (e.target.value !== "") {
      this.setState({
        visible: false
      });
    }
  };
  render() {
    return (
      <Card type="inner">
        <div className="venuefilters">
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 5 }}>
              Please select venue and screen :
            </Col>
            <Col xs={{ span: 18 }} lg={{ span: 10 }}>
              <select onChange={this.onChange} defaultValue="">
                <option value="">Choose venue</option>
                <option value="A">1</option>
                <option value="B">2</option>
              </select>
              &nbsp;&nbsp;
              <select defaultValue="" disabled={this.state.visible}>
                <option value="">Choose screen</option>
                <option value="A">1</option>
                <option value="B">2</option>
              </select>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 5 }}>
              Maximum limit of users :{" "}
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 5 }}>
              <input type="text" pattern="[0-9]+" required />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 5 }}>
              Description:
            </Col>
            <Col xs={{ span: 6 }} lg={{ span: 3 }}>
              <textarea rows="2" cols="25" />{" "}
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={{ span: 6 }} lg={{ span: 5 }}>
              Ameneties:
            </Col>
            <Select
              mode="multiple"
              style={{ width: "auto" }}
              placeholder="Please select"
              defaultValue={["Wifi", "Parking", "Food Store"]}
            />
            &nbsp;&nbsp;
            {/* put ameneties from backend and a popconfirm to delete it */}
          </Row>
        </div>
      </Card>
    );
  }
}
export default AddBookingFilters;
