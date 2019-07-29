import { Table} from "antd";
import React from "react";
import axios from "axios";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Payment extends React.Component {
    componentDidMount() {
        axios.get(`https://cafehungama.herokuapp.com/client/5d38a08cd561f03a18743855/notifications/request`).then(res => {
            this.setState({ data: res.data, loading: false });

            console.log(this.state.data);
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            notifications: [],
            columns: [
                {
                    title: "Notification",
                 //   dataIndex: "request",
                    key: "request"
                }
            ],
            data: []
        };
    }

    render() {
        //const { data } = this.state.data;
        return (
            <div style={{marginLeft:'20px',width:'40%'}}>
                <Table columns={this.state.columns} pagination={false} dataSource={this.state.data} bordered size="small" scroll={{ y: 200 }} loading={this.state.loading}/>
            </div>
        );
    }
}

export default Payment;
