import React from "react";
import { Tabs } from "antd";
import Payment from './Payment';
import Request from './Request';
import Eventsdone from './Eventsdone';
import Cards from './Cards';
const { TabPane } = Tabs;

class Dashboard extends React.Component {
  state = { size: "small" };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="EventDone" key="1">
            <Eventsdone />
          </TabPane>
          <TabPane tab="Payment" key="2">
            <Payment />
          </TabPane>
          <TabPane tab="Request" key="3">
            <Request />
          </TabPane>
        </Tabs>
        <Cards />
      </div>
    );
  }
}
export default Dashboard;

