import React, { Component } from "react";
import { Card, Icon, Row, Col, Modal } from "antd";
import AddVenue from "./AddVenue";
import "./venue.css";
import Axios from "axios";
class Venue extends Component {
  state = {
    visible: false,
    visibleDetails: false
  };

  componentDidMount() {
    Axios.get(
      `https://github.com/Manvityagi/events-backend/blob/master/routes/client/venue/CR_venue.js`
    ).then(res => {
      this.setState({ data: res.data });
    });
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  cardClicked = e => {
    this.showModalDetails();
    console.log(e.target);
  };

  renderData = venues => {
    return venues.map(venue => {
      return (
        <div style={{ alignContent: "center" }}>
          <Card.Grid
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              flexDirection: "column",
              backgroundColor: "#dbd7d7",
              border: "1px solid black",
              margin: "5px"
            }}
            onClick={this.cardClicked}
          >
            <h4>Name:</h4>
            <h4>Address:</h4>
            <h4>Ratings:</h4>
            <h4>Screens:</h4>
            <h4>Amenties:</h4>
          </Card.Grid>
        </div>
      );
    });
  };
  showModalDetails = () => {
    this.setState({
      visibleDetails: true
    });
  };

  handleOkDetails = e => {
    console.log(e);
    this.setState({
      visibleDetails: false
    });
  };

  handleCancelDetails = e => {
    console.log(e);
    this.setState({
      visibleDetails: false
    });
  };
  render() {
    const data = [{ key: "0" }, { key: "1" }];
    return (
      <div>
        <Row>
          <Col span={12}>
            <Card
              title="Manage Venue"
              headStyle={{
                textAlign: "center",
                fontSize: "20px",
                color: "white",
                backgroundColor: "#b51a12"
              }}
            >
              {this.renderData(data)}
            </Card>
          </Col>
          <Col span={12}>
            <button class="button" onClick={this.showModal}>
              <Icon type="home" />
              Add new Venue
            </button>

            <Modal
              title="Add Venue"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <AddVenue />
            </Modal>
          </Col>
        </Row>
        <div>
          <Modal
            title="Venue Detail"
            visible={this.state.visibleDetails}
            onOk={this.handleOkDetails}
            onCancel={this.handleCancelDetails}
          />
        </div>
      </div>
    );
  }
}
export default Venue;
