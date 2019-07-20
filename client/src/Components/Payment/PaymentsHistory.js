import React from 'react'
import './PaymentsHistory.css'
import { Table } from 'antd';


class ManagePayments extends React.Component{
    //API function for bussiness details
    getDataBussiness(){
        return {
                totalBussiness:"50000",
                paymentsDone:"30000",
                balanceLeft:"20000"
            }
    }
    //API function to get Transactions
    getDataTransactions(){
        return [
            {
                key:'1',
                transactionID:"3434JHS",
                date:"05/06/2010",
                openingBalance:50000,
                amount:30000,
                closingBalance:20000
            },
            {   
                key:'2',
                transactionID:"3434JHS",
                date:"05/06/2010",
                openingBalance:50000,
                amount:30000,
                closingBalance:20000
            }
        ]
    }
    columns = [
        {
          title: "Transaction ID",
          dataIndex: "transactionID",
          key: "transactionID",
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Opening Balance",
          dataIndex: "openingBalance",
          key: "openingBalance",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        }, {
            title: "Closing Balance",
            dataIndex: "closingBalance",
            key: "closingBalance",
        }
    ]
    render(){
        const data=this.getDataBussiness();
        const dataTable=this.getDataTransactions();
        return (
            <div>
                <div className="details">
                    <div><h3>Total Bussiness</h3><h3>{data.totalBussiness}</h3></div>
                    <div><h3>Payment Done</h3><h3>{data.paymentsDone}</h3></div>
                    <div><h3>Balance Left</h3><h3>{data.balanceLeft}</h3></div>
                </div>
                <div className="transactionTable">
                <Table columns={this.columns} dataSource={dataTable} bordered/>
                </div>
            </div>
        )
    }
}

export default ManagePayments