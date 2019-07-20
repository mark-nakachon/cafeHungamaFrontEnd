import React from "react";
import { Tabs } from "antd";
import ClientWise from "./ClientWise";
import AllReq from "./AllReq";
const { TabPane } = Tabs;

class App extends React.Component {
  state = { size: "small" };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Tabs defaultActiveKey="1" size={size}>
          <TabPane tab="All Requests" key="1">
            <AllReq />
          </TabPane>
          <TabPane tab="Client-Wise Request" key="2">
            <ClientWise />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default App;
