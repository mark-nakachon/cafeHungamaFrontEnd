import React from "react";
import "./ClientDetail.css";
import { Card, Table, Button, Modal } from "antd";
import Venue from "./Venue";
import AddTransaction from "./AddTransaction";

const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date"
  },
  {
    title: "Pending Dues",
    dataIndex: "PendingDues",
    key: "Pending Dues"
  },
  {
    title: "Payment Done",
    dataIndex: "PaymentDone",
    key: "Payment Done"
  }
];
const data = [
  {
    key: "1",
    Date: "9/01/2019",
    PendingDues: "1000",
    PaymentDone: "2000"
  }
];

class ClientDetail extends React.Component {
  state = {
    regdate: "9/10/2019",
    adhaar: "23456789",
    gst: "676021",
    ifsc: "567890",
    bankname: "sbi",
    branch: "tilak nagar",
    Accountno: "34567",
    visible: false,
    pendingdues: data.PendingDues
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>
            Registered on : {this.state.regdate} &nbsp;&nbsp; Adhaar number :{" "}
            {this.state.adhaar} &nbsp; &nbsp; GST number : {this.state.gst}
          </h3>
        </div>
        &nbsp;
        <div>
          <Card title="Account Details" style={{ width: 600 }}>
            <p>IFSC Code : {this.state.ifsc}</p>
            <p>Bank Name :{this.state.bankname}</p>
            <p>Branch : {this.state.branch}</p>
            <p>Account Number :{this.state.Accountno}</p>
          </Card>
        </div>
        &nbsp;
        <div>
          <Card title="Venues" style={{ width: 600 }}>
            <Venue />
          </Card>
        </div>
        &nbsp;
        <div>
          <Card title="Transaction Details" style={{ width: 900 }}>
            <div>
              <Button type="primary" onClick={this.showModal}>
                Add Transaction
              </Button>
              <Modal
                title="Add Payment"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
                <AddTransaction clientid="456TYHUI876" pendingdues="5000" />
              </Modal>
            </div>
            <Table columns={columns} dataSource={data} pagination={false} />
          </Card>
        </div>
        <div />
      </div>
    );
  }
}
export default ClientDetail;
