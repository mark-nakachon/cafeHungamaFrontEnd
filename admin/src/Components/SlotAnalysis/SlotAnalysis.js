import React from "react";
import { Button, Table, Select } from "antd";

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
        title: "Client Comany",
        dataIndex: "clientCompany"
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
    data: [],
    loading: true,
    slot: "24",
    date: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidMount() {
    this.search();
    this.setState({ loading: false });
  }
  search = () => {
    /*
    try{
      axios.get(``)                                      //pass slot and date
      .then(response =>{
        this.setState({data:response.data,loading:false})
      })
    }
    catch(error){
      console.log(error)
    }
    */
  };
  render() {
    return (
      <div>
        Date :&nbsp;&nbsp;
        <input type="date" onChange={this.handleChange} name="date" />
        &nbsp;&nbsp; Time Slot : &nbsp;
        <Select
          placeholder="Please select"
          defaultValue="24"
          onChange={this.handleChange}
          name="slot"
        >
          {children}
        </Select>{" "}
        &nbsp;&nbsp;
        <Button type="primary" onClick={this.search}>
          Search
        </Button>
        <br />
        <br />
        <Table
          dataSource={this.state.data}
          columns={this.state.columns}
          pagination={false}
          size="medium"
          bordered
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default SlotAnalysis;
