import React from "react";
import { WrappedAdvancedSearchForm } from "../Client/AdvancedSearchForm";

class Clientwise extends React.Component {
  onTermSubmit = () => {};
  render() {
    return <WrappedAdvancedSearchForm onSubmit={this.onTermSubmit} />;
  }
}
export default Clientwise;
