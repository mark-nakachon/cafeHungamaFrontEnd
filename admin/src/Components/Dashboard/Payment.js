import { Table, Popconfirm, Button } from "antd";
import React from "react";
import axios from "axios";

class Payment extends React.Component {
  handleDelete = name => {
    const data = [...this.state.data];
    this.setState({ data: data.filter(item => item.name !== name) });
  };

  componentDidMount() {
    try {
      const cols = this.state.columns.filter(col => col.show);
      axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        this.setState({ data: res.data, loading: false, columns: cols });
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
                  onConfirm={() => this.handleDelete(record.name)}
                >
                  <Button>Accept</Button>
                </Popconfirm>
                <Popconfirm
                  title="Sure to decline?"
                  onConfirm={() => this.handleDelete(record.name)}
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
