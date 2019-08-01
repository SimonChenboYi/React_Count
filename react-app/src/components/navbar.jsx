import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#" style={{ fontSize: 30 }}>
          Navbar{" "}
          <span
            className="badge badge-pill badge-secondary"
            style={{ fontSize: 30 }}
          >
            {this.props.totalCounters}
          </span>
          <button
            onClick={this.props.onAdd}
            style={{ fontSize: 30 }}
            className="btn btn-info btn-sm m-2"
          >
            Add
          </button>
        </a>
      </nav>
    );
  }
}

export default NavBar;
