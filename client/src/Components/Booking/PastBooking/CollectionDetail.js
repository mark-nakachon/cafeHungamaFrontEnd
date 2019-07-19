import React from "react";
import { Table, Row, Col, Card, Avatar, Tooltip } from "antd";

const EditableContext = React.createContext();

class EditableCell extends React.Component {
  renderCell = () => {
    const { dataIndex, record, editing, children } = this.props;
    return (
      <td>
        {editing ? (
          <Tooltip title={Math.random() + " tickets sold"}>
            <span> {record[dataIndex]}Amount</span>{" "}
            {/*remove amount word from here */}
          </Tooltip>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class CollectionDetails extends React.Component {
  state = {
    columns: [
      {
        title: "Time- Slot",
        dataIndex: "timing",
        enableTooltip: false
      },
      {
        title: "Sunday",
        dataIndex: "sunday",
        enableTooltip: true
      },
      {
        title: "Monday",
        dataIndex: "monday",
        enableTooltip: true
      },
      {
        title: "Tuesday",
        dataIndex: "tuesday",
        enableTooltip: true
      },
      {
        title: "Wednesday",
        dataIndex: "wednesday",
        enableTooltip: true
      },
      {
        title: "Thursday",
        dataIndex: "thursday",
        enableTooltip: true
      },
      {
        title: "Friday",
        dataIndex: "friday",
        enableTooltip: true
      },
      {
        title: "Saturday",
        dataIndex: "saturday",
        enableTooltip: true
      }
    ],
    data: [
      {
        timing: "12:00 a.m.-1:00 a.m."
      },
      {
        timing: "1:00 a.m.-2:00 a.m."
      },
      {
        timing: "2:00 a.m.-3:00 a.m."
      },
      {
        timing: "3:00 a.m.-4:00 a.m."
      },
      {
        timing: "4:00 a.m.-5:00 a.m."
      }
    ]
  };

  render() {
    const { data, columns } = this.state;
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const cols = columns.map(col => {
      if (!col.enableTooltip) return col;
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          editing: true
        })
      };
    });

    return (
      <div>
        <Row>
          <Col lg={{ span: 15 }}>
            <h2 className="weekanalysis ">Collection Details</h2>
            <EditableContext.Provider>
              <Table
                components={components}
                dataSource={data}
                columns={cols}
                pagination={false}
                bordered
                size="middle"
              />
            </EditableContext.Provider>
          </Col>
          <Col lg={{ span: 1 }} />
          <Col lg={{ span: 8 }}>
            <h2 className="weekanalysis ">Weekly Analysis</h2>
            <Card title="Total Tickets Sold" bordered={false}>
              <Row>
                <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                  <Avatar size={120} className="type1">
                    1500
                  </Avatar>
                </Col>
                <Col lg={{ span: 12 }} xs={{ span: 12 }}>
                  <Avatar size={120} className="type2">
                    2000
                  </Avatar>
                </Col>
              </Row>
            </Card>
            <br />
            <Card title="Total Amount Collected" bordered={false}>
              <Row>
                <Col lg={{ span: 12 }}>
                  <Avatar size={120} className="type1">
                    20000
                  </Avatar>
                </Col>
                <Col lg={{ span: 12 }}>
                  <Avatar size={120} className="type2">
                    30000
                  </Avatar>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CollectionDetails;
