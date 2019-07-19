import React from "react";
import { Card, Icon, Button, Modal } from "antd";
import EditClientProfile from "./EditClientProfile";

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

  handleOk = () => {
    this.setState({
      visible: false,
      confirmLoading: false
    });
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
            <Button key="submit" type="primary" onClick={this.handleOk}>
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

const RequestClientDetails = () => {
  //This function for API

  return {
    firstname: "Ashish",
    lastname: "Mittal",
    phonenumber: "9988776655",
    alternatenumber: null,
    email: "ashish@hotmail.com",
    address: {
      line: "building 54 MATAVALA Chock",
      city: "Rohini",
      state: "Delhi",
      pincode: "110050"
    },
    registeredvenues: "5"
  };
};
const clientProfile = props => {
  let data = RequestClientDetails(); // This data variable will accept the jason data from the API
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
          <Icon type="phone" /> {data.phonenumber}
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
          <Icon type="home" /> {data.address.line},{data.address.city},
          {data.address.state}-{data.address.pincode}
        </h3>
        <ClientEditPage data={data} />
      </Card>
    </div>
  );
};

// const clientProfile = (props) =>{
//     return (
//         <div className="container-client-profile">
//             <h1>Profile</h1>
//             <div>
//                 <p>  <h3>First Name : </h3>{props.data.FirstName}</p>
//                 <p>  <h3>Last Name : </h3>{props.data.LastName}</p>
//             </div>
//                 <p>  <h3>Phone Number : </h3>{props.data.PhoneNumber}</p>
//                 <p>  <h3>Alternate Number : </h3>{props.data.AlternateNumber}</p>
//             <div>
//                 <p>  <h3>Email : </h3>{props.data.Email}</p>
//             </div>
//             <div>
//                 <p>  <h3>Address : </h3>{props.data.Address.Line} {props.data.Address.City} {props.data.Address.State}</p>
//             </div>
//             <div>
//                 <p>  <h3>Total Registered Venues : </h3>{props.data.RegisteredValue}</p>
//                 <p>  <h3>Pincode : </h3>{}</p>
//             </div>

//         </div>
//     )
// }

export default clientProfile;
