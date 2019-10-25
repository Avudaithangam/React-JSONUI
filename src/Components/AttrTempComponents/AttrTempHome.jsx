import React, { Component } from "react";
import AttrTempForm from "./AttrTempForm";
import FlatTable from "../FlatTable/FlatTable";
import CreateEntity from "../common/CreateEntity";

class createattr extends React.Component {
  state = {
    showComponent: false,
    data: []
  };
  doattronclick = () => {
    this.setState({
      showComponent: true
    });
  };

  handleOnSubmit = () => {
    console.log(" On Submit...");

    this.setState({
      showComponent: false
    });
    this.getRESTData();
  };
  componentWillMount() {
    this.getRESTData();
  }
  getRESTData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ data: json });
      });
  };
  render() {
    let header = ["userId", "id", "title", "body"];
    /*let data = [
      { name: "prabu", id: "001", city: "Blore", pin: "560028" },
      { name: "Ram", id: "002", city: "chennai", pin: "560028" },
      { name: "Bill", id: "003", city: "CA", pin: "7368" }
    ];*/

    return (
      <div>
        {/*!this.state.showComponent ? (
          <CreateEntity doOnClick={this.doattronclick} />
        ) : null*/}
        {!this.state.showComponent ? (
          <FlatTable header={header} data={this.state.data} />
        ) : null}
        {this.state.showComponent ? (
          <AttrTempForm onSubmit={this.handleOnSubmit} />
        ) : null}
      </div>
    );
  }
}
export default createattr;
