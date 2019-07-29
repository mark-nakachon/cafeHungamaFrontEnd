import { Table } from "antd";
import React from "react";
import './dashboard.css'
import axios from "axios";

//make a state for called response for accept and decline and pass that as parameter in axios.post
class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.columns= [
            {
                title: "Notification",
              //  dataIndex: "event",
                key: "event"
            }
        ];
        this.state = {
            loading: true,
            data: []
        };
    }
    componentDidMount() {
        axios.get(`https://cafehungama.herokuapp.com/client/5d38a08cd561f03a18743855/notifications/event`)
        .then(res => {
            this.setState({ data: res.data, loading: false });
            console.log(this.state.data);
        });
    }
    

    render() {
        //const { data } = this.state;
        return (
            <div style={{ marginLeft: '20px', width: '40%' }}>
                <Table columns={this.columns} dataSource={this.state.data} pagination={false} bordered size="small"  scroll={{ y:200 }} loading={this.state.loading}/>
            </div>
        );
    }
}

export default Payment;
