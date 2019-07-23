import { Button } from "antd";
import { Table, Popconfirm } from "antd";
import React from "react";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Tab extends React.Component {
  handleDelete = issue_subject => {
    const data = [...this.state.data];
    this.setState({
      data: data.filter(item => item.issue_subject !== issue_subject)
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Issue Subject",
          dataIndex: "issue_subject",
          key: "issue_subject"
        },
        {
          title: "Issue Explanation",
          dataIndex: "issue_explanation"
        },
        {
          title: "Issue Comment",
          dataIndex: "issue_comment"
        },
        {
          title: "Immediate Contact",
          dataIndex: "immediate_contact"
        },
        {
          title: "Action",
          dataIndex: "operation",
          render: (text, record) =>
            this.state.columns.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  console.log(record);
                  this.handleDelete(record.issue_subject);
                }}
              >
                <Button>Delete</Button>
              </Popconfirm>
            ) : null
        }
      ],
      data: []
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items !== this.props.items) {
      this.setState({
        data: [this.props.items, ...this.state.data]
      });
    }
  }
  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          bordered
          rowKey="issue_subject"
        />
      </div>
    );
  }
}

export default Tab;
