import React from "react";
//import PieChartStatus from "./PieChartStatus";
import CollectionDetails from "./CollectionDetail";
import { Table, Row, Col } from "antd";

const columns = [
  {
    title: "Venue ",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Monday",
    dataIndex: "mon",
    key: "mon"
  },
  {
    title: "Tuesday",
    dataIndex: "tue",
    key: "tue"
  },
  {
    title: "Wednesday",
    dataIndex: "wed",
    key: "wed"
  },
  {
    title: "Thursday",
    dataIndex: "thurs",
    key: "thurs"
  },
  {
    title: "Friday",
    dataIndex: "fri",
    key: "fri"
  },
  {
    title: "Saturday",
    dataIndex: "sat",
    key: "sat"
  },
  {
    title: "Sunday",
    dataIndex: "sun",
    key: "sun"
  }
];

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `Venue ${i}`,
    mon: Math.floor(Math.random() * 10000 + 1000),
    tue: Math.floor(Math.random() * 10000 + 1000),
    wed: Math.floor(Math.random() * 10000 + 1000),
    thurs: Math.floor(Math.random() * 10000 + 1000),
    fri: Math.floor(Math.random() * 10000 + 1000),
    sat: Math.floor(Math.random() * 10000 + 1000),
    sun: Math.floor(Math.random() * 10000 + 1000)
  });
}

class PastBooking extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg={{ span: 18 }}>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Col>
          {/* <Col lg={{ span: 6 }}>
            <PieChartStatus />
          </Col> */}
        </Row>
        <br />
        VENUE 1 - Sreen 1
        <Row>
          <Col>
            <CollectionDetails />
          </Col>
        </Row>
      </div>
    );
  }
}

export default PastBooking;
