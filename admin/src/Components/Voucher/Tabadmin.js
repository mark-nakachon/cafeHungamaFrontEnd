import { Button } from "antd";
import { Table, Popconfirm } from "antd";
import React from "react";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Tab extends React.Component {
  handleDelete = vouchername => {
    const data = [...this.state.data];
    this.setState({
      data: data.filter(item => item.vouchername !== vouchername)
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Voucher Name",
          dataIndex: "vouchername",
          key: "vouchername"
        },
        {
          title: "Voucher Amount",
          dataIndex: "amount"
        },
        {
          title: "Voucher Description",
          dataIndex: "description"
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
                  this.handleDelete(record.vouchername);
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
          rowKey="vouchername"
        />
      </div>
    );
  }
}

export default Tab;
