import React, { Component } from "react";
import { Card, Icon, Row, Col, Modal } from "antd";
import AddVenue from "./AddVenue";
import "./venue.css";
import Axios from "axios";
class Venue extends Component {
  state = {
    visible: false,
    visibleDetails: false,
    data : []
  };

  componentDidMount() {
    Axios.get(
      `https://cafehungama.herokuapp.com/client/5d09067224036b46e40f8d30/venues`
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
    if(venues.length>0)
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
          > <div className="vimage">
              {venue.image}
          </div>
            <div className="vdetail">
              <h4>Name:{venue.venueName}</h4>
              <h4>Address:{venue.line1},{venue.city},{venue.state}</h4>
              <h4>Ratings:</h4>
              <h4>Screens:{venue.noOfScreens}</h4>
              <h4>Amenties:{venue.amenties}</h4>
              <h4>Contact:{venue.venueContact}</h4>
              <h4>Capacity:{venue.maxCapacity}</h4>
            </div>
          </Card.Grid>
        </div>
      );
    });
    else
    return <div>No Venues Registered</div>
  };
  onSubmit=(props)=>{
    console.log(props);
    Axios.post(
      `https://cafehungama.herokuapp.com/client/5d09067224036b46e40f8d30/venues`,props[0]
    ).then(function (response) {
      console.log(response);
      console.log( response.data);
    })
    this.setState({
      visible: false
    });
    
  }
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
              {this.renderData(this.state.data)}
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
              <AddVenue onSubmit={this.onSubmit}/>
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
