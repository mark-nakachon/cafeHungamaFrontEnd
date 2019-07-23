import React from "react";
import { Table, Input, Form, Row, Col } from "antd";
//import WeekPicker from "./WeekPicker";
//import moment from "moment";
const data = [];
let startTime = 12;
let endTime = 1;
let startMeridiem = "am";
let endMeridiem = "am";
for (let i = 0; i < 24; i++) {
  if (startTime === 13) {
    startTime = 1;
  }
  if (endTime === 12) {
    endMeridiem = "pm";
  }
  if (endTime === 13) {
    endTime = 1;
    endMeridiem = "pm";
    startMeridiem = "pm";
  }
  data.push({
    key: i.toString(),
    timing: `${startTime}${startMeridiem} - ${endTime}${endMeridiem}`,
    rowprice: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
  });
  startTime++;
  endTime++;
}
const selectedWeek = [];
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  state = {
    bgcolor: "cornsilk"
  };
  setColor = e => {
    if (e.target.value > 0) this.setState({ bgcolor: "green" });
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        <Form.Item style={{ margin: 0 }}>
          {getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `Please Input price!`
              }
            ],
            initialValue: record[dataIndex]
          })(<Input />)}
        </Form.Item>
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedWeek,
      columns: [
        {
          title: "Time- Slot",
          dataIndex: "timing",
          width: "15%",
          editable: true
        },
        {
          title: "Row Price",
          dataIndex: "rowprice",

          editable: true
        },
        {
          title: "Sunday",
          dataIndex: "sunday",
          editable: true
        },
        {
          title: "Monday",
          dataIndex: "monday",
          editable: true
        },
        {
          title: "Tuesday",
          dataIndex: "tuesday",
          editable: true
        },
        {
          title: "Wednesday",
          dataIndex: "wednesday",
          editable: true
        },
        {
          title: "Thursday",
          dataIndex: "thursday",
          editable: true
        },
        {
          title: "Friday",
          dataIndex: "friday",
          editable: true
        },
        {
          title: "Saturday",
          dataIndex: "saturday",
          editable: true
        }
      ]
    };
  }
  /* onHandleWeek = async value => {
    await this.setState({
      selectedWeek: [value]
    });
    console.log(this.state.selectedWeek);
  }; */
  isEditing = record => record.key === this.state.editingKey;
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedDays !== this.props.selectedDays) {
      this.setState({
        columns: [...this.state.columns]
      });
    }
    console.log("here");
  }
  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };

    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      } else {
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: "text",
            dataIndex: col.dataIndex,
            title: col.title
          })
        };
      }
    });
    //console.log(this.state.selectedWeek);
    return (
      <Row>
        <Col lg={{ span: 18 }}>
          <EditableContext.Provider value={this.props.form}>
            <Table
              components={components}
              bordered
              dataSource={this.state.data}
              columns={columns}
              rowClassName="editable-row"
              pagination={false}
            />
          </EditableContext.Provider>
        </Col>
        <Col lg={{ span: 6 }} />
      </Row>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
