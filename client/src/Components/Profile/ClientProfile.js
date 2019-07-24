import React from "react";
import { Card, Icon, Button, Modal } from "antd";
import EditClientProfile from "./EditClientProfile";
import API from '../../api/API';

class ClientEditPage extends React.Component {
  state = {
    visible: false
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleClose = () => {
    this.setState({
      visible: false,
      confirmLoading: false
    });
    document.location.reload(true);
  };

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button size="large" onClick={this.showModal}>
          Edit
        </Button>
        <Modal
          title="Edit Profile"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={this.handleClose}>
              Done
            </Button>
          ]}
        >
          <EditClientProfile data={this.props.data} />
        </Modal>
      </div>
    );
  }
}


class clientProfile extends React.Component{
  state={
    data:{}
  }
  componentDidMount(){
    this.RequestClientDetails()
  }
  RequestClientDetails = async () => {
    //This function for API
    const response = await API.get('https://cafehungama.herokuapp.com/client/5d368a7f4a915e2c58f34952/profile')
    console.log(response.data)
    if(response.data==null||response.data===""){
      this.setState({
        data:{
        firstname: "EnterName",
        lastname: "",
        contact: "Fill Details",
        alternatenumber: null,
        email: "Fill Details",
        line1: "Fill Details",
        city: "",
        state: "",
        pincode: "",
        registeredvenues: "Can't Tell"
        }
      })
    }
    else{
      this.setState({data:response.data})
      console.log(response)
    }
  }
  render(){
   let data=this.state.data
  return (
    <div style={{}}>
      <Card
        title="Profile"
        headStyle={{
          background: "#1c2430",
          textAlign: "center",
          color: "white",
          padding: "1em"
        }}
        style={{ width: "90%", border: "solid 1px black", margin: "auto" }}
      >
        <h3>
          <Icon type="user" /> {data.firstname} {data.lastname}
        </h3>
        <h3>
          <Icon type="phone" /> {data.contact}
        </h3>
        <h3>
          <Icon type="phone" /> {data.alternateNumber}(Alternate)
        </h3>
        <h3>
          <Icon type="mail" /> {data.email}
        </h3>
        <h3>
          <Icon type="appstore" /> Registered Venues : {data.registeredvenues}
        </h3>
        <h3>
          <Icon type="home" /> {data.line1},{data.city},
          {data.state}-{data.pincode}
        </h3>
        <ClientEditPage data={data} />
      </Card>
    </div>
  );
};
}

export default clientProfile;
