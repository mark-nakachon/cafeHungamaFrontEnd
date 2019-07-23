import React from "react";
import { DatePicker, Table, Select } from "antd";
import moment from "moment";

const { Option } = Select;
const children = [];
for (let i = 1; i <= 24; i++) {
  children.push(<Option key={i}>{i}</Option>);
}
class SlotAnalysis extends React.Component {
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
        title: "Venue Name",
        dataIndex: "venueName"
      },
      {
        title: "Venue Location",
        dataIndex: "venueLocation"
      }
    ],
    data: []
  };
  disabledDate = current => {
    return current > moment().endOf("day");
  };
  render() {
    return (
      <div>
        Date :&nbsp;&nbsp;
        <DatePicker disabledDate={this.disabledDate} />
        &nbsp;&nbsp; Time Slot : &nbsp;
        <Select placeholder="Please select" defaultValue="24">
          {children}
        </Select>
        <br />
        <br />
        <Table
          dataSource={this.state.data}
          columns={this.state.columns}
          pagination={false}
          size="medium"
          bordered
        />
      </div>
    );
  }
}
export default SlotAnalysis;
