import React from "react";
import { WrappedAdvancedSearchForm } from "./AdvancedSearchForm";
import EditableFormTable from "./EditableTable";
import axios from "axios";
class Client extends React.Component {
  state = {
    selectedclient: []
  };
  componentDidMount() {
    this.onTermSubmit();
  }
  async onTermSubmit() {
    try {
      const response = await axios.get(
        `https://cafehungama.herokuapp.com/admin/clients?firstName=Tyagi`
      );
      this.setState({ selectedclient: response.data  });
            console.log(this.state.selectedclient)
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div>
        <WrappedAdvancedSearchForm onSubmit={this.onTermSubmit} />
        <br />
        <div>
          <EditableFormTable client={this.state.selectedclient} />
        </div>
      </div>
    );
  }
}
export default Client;
