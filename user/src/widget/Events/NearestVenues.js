import React from "react";
import { Card } from "antd";

class NearestVenues extends React.Component {
  render() {
    return (
      <Card title="Neares Venues">
        <Card>
          <p>Name</p>
          <p>Address</p>
          <p>3:00 p.m.- 4:00 &nbsp;&nbsp;p.m. Rs700/- &nbsp;&nbsp; 61/100</p>
        </Card>
        <Card>Content</Card>
        <Card>Content</Card>
        <Card>Content</Card>
      </Card>
    );
  }
}

export default NearestVenues;
