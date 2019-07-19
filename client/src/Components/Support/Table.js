import { Table } from "antd";
import React from "react";
import "antd/dist/antd.css";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Issue_Subject",
          dataIndex: "subject"
        },
        {
          title: "Issue_Explanation",
          dataIndex: "explanation"
        },
        {
          title: "Issue_Comment",
          dataIndex: "comment"
        },
        {
          title: "Immediate_Contact",
          dataIndex: "contact"
        },
        {
          title: "Action",
          dataIndex: "operation"
        }
      ]
    };
  }

  render() {
    const data = this.props.items;
    console.log(data);
    return (
      <div>
        <Table columns={this.state.columns} dataSource={data} bordered />
      </div>
    );
  }
}

export default Client;
