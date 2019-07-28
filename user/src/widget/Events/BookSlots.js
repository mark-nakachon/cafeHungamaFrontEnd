import React from "react";
import moment from "moment";
import { Table, DatePicker, Button, Row, Col, Card } from "antd";
import VenueDetails from "./VenueDetails";
import NearestVenues from "./NearestVenues";
import "../index.css";

const availability = ["Booked", "Normal", "NA", "Selected"];

const data = [];
for (let i = 0; i < 24; i++) {
  data.push({
    key: i,
    name: `${i} - ${i + 1}`,
    price: Math.floor(Math.random() * 500 + 100),
    address: `${i}/${i + 10}`,
    status: availability[Math.floor(Math.random() * 4)]
  });
}

class BookSlots extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column,
    selectedRows: [],
    selectNumberOfSeats: 1,
    selectedData: [],
    price: 0,
    columns: [
      {
        title: "Time Slot",
        dataIndex: "name"
      },
      {
        title: "Price",
        dataIndex: "price"
      },
      {
        title: " Seats Filled",
        dataIndex: "address"
      },
      {
        title: " Status",
        dataIndex: "status"
      }
    ]
  };

  onSelectChange = (selectedRowKeys, selectedRows) => {
    //  console.log("selectedRowKeys changed: ", selectedRowKeys, selectedRows);
    this.setState({
      selectedRowKeys,
      selectedData: selectedRows,
      price: selectedRows.reduce((acc, curr) => acc + curr.price, 0)
    });
    // console.log(...selectedRows.map(sel => sel.price));
  };

  /* getPrice = record => {
    this.setState({
      price: record.price
    });
  };*/
  changePrice = () => {
    this.setState({
      price: Math.max(...this.state.selectedData.map(sel => sel.price))
    });
  };
  disabledDate = (current) =>{
    // Can not select days before today
    return (
      current < moment().startOf("day")
    );
  }
  decrement = () => {
    if (this.state.selectNumberOfSeats > 0)
      this.setState({
        selectNumberOfSeats: this.state.selectNumberOfSeats - 1
      });
  };
  increment = () => {
    this.setState({ selectNumberOfSeats: this.state.selectNumberOfSeats + 1 });
  };

  render() {
    console.log(this.state.price);

    const { selectedRowKeys, columns } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      getCheckboxProps: record => ({
        disabled: record.status === "NA" // Column configuration not to be checked
      })
    };
    /* const rowSelection1 = {
      type: "radio",
      onSelect: this.getPrice
    }; */

    return (
      <div>
        <Row>
          <Col lg={{ span: 2 }} />
          <Col lg={{ span: 20 }}>
            <VenueDetails />
            <Row>
              <Col lg={{ span: 13 }}>
                <h2 className="note">
                  <b>Note : </b>You Can Select Multiple Seats{" "}
                </h2>
              </Col>
            </Row>
            <br />
            <DatePicker size="large" disabledDate={this.disabledDate} defaultValue={moment()} />
            &nbsp;&nbsp;&nbsp;
            <Button onClick={this.decrement}> - </Button>
            &nbsp;&nbsp;
            <input
              type="text"
              value={this.state.selectNumberOfSeats}
              id="selectNumberOfSeats"
              onChange={e => {
                if (e.target.value)
                  this.setState({
                    selectNumberOfSeats: parseInt(e.target.value)
                  });
                else
                  this.setState({
                    selectNumberOfSeats: ""
                  });
              }}
            />{" "}
            &nbsp;&nbsp;
            <Button onClick={this.increment}> + </Button>
            <br />
            <Row>
              <Col lg={{ span: 13 }}>
                <Table
                  rowSelection={rowSelection}
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                />
              </Col>
              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 10 }}>
                <NearestVenues />
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={{ span: 10 }}>
                <Table
                  /* rowSelection={rowSelection1} */
                  columns={columns}
                  dataSource={this.state.selectedData}
                  pagination={false}
                />
              </Col>

              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 3 }}>
                <Button onClick={this.changePrice}>
                  {" "}
                  Select 1 slot of all the slots{" "}
                </Button>
              </Col>
              <Col lg={{ span: 1 }} />
              <Col lg={{ span: 3 }}>
                <Card>
                  When minimum criteria reaches, your slot will get finalised
                </Card>
              </Col>
            </Row>
            <span className="note">
              Total Price: {this.state.selectNumberOfSeats * this.state.price}
            </span>
            <br />
            <Row>
              <Col lg={{ offset: 6 }}>
                <Button type="primary" size="large" >
                  Book Tickets and Pay
                </Button>
              </Col>
            </Row>
          </Col>

          <Col lg={{ span: 2 }} />
        </Row>
      </div>
    );
  }
}

export default BookSlots;
