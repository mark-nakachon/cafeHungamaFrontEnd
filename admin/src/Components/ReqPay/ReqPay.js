import React from "react";
import { Table } from "antd";
class App extends React.Component {
  state = {
    columns: [
      {
        title: "Client Id",
        dataIndex: "clientId"
      },
      {
        title: "Client Name",
        dataIndex: "clientName"
      },
      {
        title: "Client Comany",
        dataIndex: "clientCompany"
      },
      {
        title: "Date of transaction",
        dataIndex: "date"
      },
      {
        title: "Opening Balance",
        dataIndex: "openbal"
      },
      {
        title: "Amount Paid",
        dataIndex: "amount"
      },
      {
        title: "Closing Balance",
        dataIndex: "closingbal"
      }
    ],
    data: []
  };
  componentDidMount() {
    //call api
  }
  render() {
    return (
      <Table
        columns={this.state.columns}
        dataSource={this.state.data}
        bordered
      />
    );
  }
}

export default App;
