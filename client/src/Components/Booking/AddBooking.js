import React from "react";
import { Table, Input, Form } from "antd";
//import WeekPicker from "./WeekPicker";
//import moment from "moment";
const data = [];
for (let i = 0; i < 24; i++) {
  data.push({
    key: i.toString(),
    timing: `${i}-${i + 1}`,
    rowprice: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
  });
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
          width: "10%",
          editable: true
        },
        {
          title: "Row Price",
          dataIndex: "rowprice",
          width: "10%",
          editable: true
        },
        {
          title: "Sunday" ,
          dataIndex: "sunday",
          width: "10%",
          editable: true
        },
        {
          title: "Monday" ,
          dataIndex: "monday",
          width: "10%",
          editable: true
        },
        {
          title: "Tuesday",
          dataIndex: "tuesday",
          width: "10%",
          editable: true
        },
        {
          title: "Wednesday" ,
          dataIndex: "wednesday",
          width: "10%",
          editable: true
        },
        {
          title: "Thursday" ,
          dataIndex: "thursday",
          width: "10%",
          editable: true
        },
        {
          title: "Friday" ,
          dataIndex: "friday",
          width: "10%",
          editable: true
        },
        {
          title: "Saturday" ,
          dataIndex: "saturday",
          width: "10%",
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
      <div>
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
      </div>
    );
  }
}

const EditableFormTable = Form.create()(EditableTable);

export default EditableFormTable;
