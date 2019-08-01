import React from "react";
import { Table, Tag } from "antd";
import axios from "axios";
class Notifications extends React.Component {
  state = {
    columns: [
      {
        title: "Notification",
        dataIndex: "notification"
      } /*,
      {
        title: "Status",
        dataIndex: "status",
        render: status => (
          <span>
            {status.map(tag => {
              let color = "white";
              if (tag === "rejected") color = "volcano";
              else if (tag === "accepted") color = "green";
              else if (tag === "pending") color = "geekblue";
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        )
      }  */
    ],
    data: []
  };
  componentDidMount() {
     
        try{
            axios.get(`https://cafehungama.herokuapp.com/client/5d38a08cd561f03a18743855/notifications/all`)
            .then(response=>{
            this.setState({
                data:response.data
            })
            })
        }
        catch (e) {
          console.log(e);
         // this.setState({ loading: false });
        }
  }
  render() {
    const { data, columns } = this.state;

    return <Table dataSource={data} columns={columns} />;
  }
}
export default Notifications;
