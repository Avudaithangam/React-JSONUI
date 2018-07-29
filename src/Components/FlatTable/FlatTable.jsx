import React, { Component } from "react";
import FlatTableHeader from "./FlatTableHeader";
import FlatTableRow from "./FlatTableRow";

class FlatTable extends Component {
  state = {
    header: this.props.header || [],
    data: this.props.data || []
  };
  render() {
    let tableheader = [];
    this.state.header.forEach((element, index) => {
      tableheader.push(<FlatTableHeader key={index} header={element} />);
    });

    let tablerow = [];
    this.state.data.forEach((element, index) => {
      tablerow.push(
        <FlatTableRow key={index} header={this.state.header} data={element} />
      );
    });

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>{tableheader}</tr>
          </thead>
          <tbody>{tablerow}</tbody>
        </table>
      </div>
    );
  }
}

export default FlatTable;
