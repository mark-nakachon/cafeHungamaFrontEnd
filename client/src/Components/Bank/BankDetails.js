import React from 'react'
import 'antd/dist/antd.css';
import './BankDetails.css'
import { Card, Button,Modal } from 'antd';
import AddBankDetails from './AddBankDetails';

    class EditBankPage extends React.Component{

        state = {
            visible: false,
        };
        
        showModal = () => {
            this.setState({
            visible: true,
            });
        };
        handleCancel = e => {
            console.log(e);
            this.setState({
            visible: false,
            });
        };
        handleOk = () => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        };
        
        
        render() {
            const { visible, confirmLoading } = this.state;
            return (
            <div>
                <Button style={{width:"100%"}}size="large" type='primary' onClick={this.showModal}>
                    Add Bank
                </Button>
                <Modal
                title="Edit Profile"
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="submit" type="primary"  onClick={this.handleOk}>
                    Close
                    </Button>,
                ]}>
                <AddBankDetails/>
                </Modal>
            </div>
            );
        }
    }
    const BankDetailsRequest=()=>{
        return [
            {
            accountID:1,
            bankname : "HDFC",
            accountnumber : "11111111111111",
            branch : "Paschin Vihar",
            mobilenumber : "1122334455",
            IFSC : "234HDFC"
        },
        {
            accountID:2,
            bankname : "HDFC",
            accountnumber : "11111111111111",
            branch : "Paschin Vihar",
            mobilenumber : "1122334455",
            IFSC : "484HDFC"
        },
        {
            accountID:3,
            bankname : "HDFC",
            accountnumber : "11111111111111",
            branch : "Paschin Vihar",
            mobilenumber : "1122334455",
            IFSC : "234HDFC"
        },
        {
            accountID:4,
            bankname : "HDFC",
            accountnumber : "11111111111111",
            branch : "Paschin Vihar",
            mobilenumber : "1122334455",
            IFSC : "484HDFC"
        }];
    }
    const showBankDetails=()=>{
        let datas = BankDetailsRequest()
        return datas.map(data=>{
            return (
                <div className="bankdetails">
                <div>
                    <h2>Account {data.accountID}</h2>
                    <div><h3>Bank </h3><h3>{data.bankname}</h3></div>
                    <div><h3>Account Number</h3><h3>{data.accountnumber}</h3></div>
                    <div><h3>Branch</h3><h3>{data.branch}</h3></div>
                    <div><h3>Mobile Number</h3><h3>{data.mobilenumber}</h3></div>
                    <div><h3>IFSC</h3><h3>{data.IFSC}</h3></div>
                </div>
                </div>

            )
        })

    }
    const BankDetails =()=>{
            return(
            <div>
            <Card title="Bank Details" headStyle={{border:"ridge 2px black",margin:"0"}} bodyStyle={{padding:"0"}} style={{ border:"solid 1px black",width: "55em",margin:"auto",textAlign:"center" }}>
            <div>
                <EditBankPage/>
            </div>
                {showBankDetails()}
            </Card>
            </div>
        )
    }

export default BankDetails