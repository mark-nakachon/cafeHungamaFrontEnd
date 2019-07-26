import { Table } from "antd";
import React from "react";
import './dashboard.css'
import axios from "axios";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Payment extends React.Component {
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            this.setState({ data: res.data, loading: false });

            console.log(this.state.data.req);
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
                    dataIndex: "name"
                }
            ],

            data: [
                {
                    username: ""
                }
            ]
        };
    }

    render() {
        const { data } = this.state;
        return (
            <div style={{ marginLeft: '20px', width: '40%' }}>
                <Table columns={this.state.columns} dataSource={data} pagination={false} bordered size="large"  scroll={{y:160}} loading={this.state.loading}/>
            </div>
        );
    }
}

export default Payment;
