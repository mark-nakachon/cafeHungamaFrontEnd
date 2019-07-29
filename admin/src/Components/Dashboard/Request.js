import { Button } from "antd";
import { Table, Popconfirm } from "antd";
import React from "react";
import axios from "axios";

class Payment extends React.Component {
  handleDecline = name => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.name !== name) });
  };

  componentDidMount() {
    try {
      //check for superadmin and admin to set the visibility for the operation column

      const cols = this.state.columns.filter(col => col.show);
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        this.setState({ data: res.data, columns: cols, loading: false });
      });
    } catch (error) {
      console.log(error);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      notifications: [],
      columns: [
        {
          title: "Notification",
          dataIndex: "name",
          show: true
        },

        {
          title: "operation",
          show: false,
          dataIndex: "operation",
          render: (text, record) =>
            this.state.data.length >= 1 ? (
              <span>
                <Popconfirm
                  title="Sure to accept?"
                  onConfirm={() => this.handleAccept(record.name)}
                >
                  <Button>Accept</Button>
                </Popconfirm>
                <Popconfirm
                  title="Sure to decline?"
                  onConfirm={() => this.handleDecline(record.name)}
                >
                  <Button>Decline</Button>
                </Popconfirm>
              </span>
            ) : null
        }
      ],

      data: []
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={data}
          bordered
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Payment;
