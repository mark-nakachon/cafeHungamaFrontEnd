import React from 'react'
import { Table, Button } from 'antd';



const buttonClick = () => {
  return alert("connectAPI");  // api
}
const ReqTable = (props) => {



  const { column1, column2, column3, column4, buttons } = props

  const columns = [
    {
      title: column1,
      dataIndex: column1,
      key: column1,
    },
    {
      title: column2,
      dataIndex: column2,
      key: column2,
    },
    {
      title: column3,
      dataIndex: column3,
      key: column3,
    },
    {
      title: column4,
      dataIndex: column4,
      key: column4,
    },
    {
      title: "Action",
      key: buttons,
      render: () => (<div>
        <Button style={{ margin: "1px auto", width: "80%" }} type="primary" onClick={buttonClick}>Details</Button><br />
        <Button style={{ margin: "1px auto", width: "80%" }} type="primary" onClick={buttonClick}>button2</Button>
      </div>
      ),
    },
  ];
  return <Table columns={columns} dataSource={props.data} />

}

export default ReqTable
