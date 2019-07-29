import React from "react";
import { WrappedAdvancedSearchForm } from "./AdvancedSearchForm";
import EditableFormTable from "./EditableTable";
import axios from "axios";

class Client extends React.Component {
  state = {
    selectedclient: [],
    loading: true
  };
  componentDidMount() {
    this.onTermSubmit();
  }
  onTermSubmit = async term => {
    try {
      this.setState({ loading: true });
      let str= "";
      if(term[0].email !== "") str = str.concat("?email=", term[0].email);
      if(term[0].firstName !==""){
        if (str !== "") str = str.concat("&?firstName=", term[0].firstName);
        else str = str.concat("?firstName=", term[0].firstName);
      }
      if (term[0].contact !== "") {
        if (str !== "") str = str.concat("&?contact=", term[0].contact);
        else str = str.concat("?contact=", term[0].contact);
      }
      if (term[0].companyName !== "") {
        if (str !== "") str = str.concat("&?companyName=", term[0].companyName);
        else str = str.concat("?companyName=", term[0].companyName);
      }
      if (term[0].userName !== "") {
        if (str !== "") str = str.concat("&?userName=", term[0].userName);
        else str = str.concat("?userName=", term[0].userName);
      }
      if (term[0].venueName !== "") {
        if (str !== "") str = str.concat("&?venueName=", term[0].venueName);
        else str = str.concat("?venueName=", term[0].venueName);
      }
      const response = await axios.get(
        `https://cafehungama.herokuapp.com/admin/clients${str}`
      );
      this.setState({ selectedclient: [response.data], loading:false  });
           // console.log(this.state.selectedclient)
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <div>
        <WrappedAdvancedSearchForm onSubmit={this.onTermSubmit} />
        <br />
        <div>
          <EditableFormTable clientid={this.state.selectedclient} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}
export default Client;
