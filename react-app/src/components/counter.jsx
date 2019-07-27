import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement= () => {
    this.setState({ count: this.state.count + 1 })
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}{" "}
      </ul>
    );
  }

  handleIncrement = ()=> {
    this.setState({ count: this.state.count+1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 50 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          style={{ fontSize: 40 }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.length === 0 && "please create a new tag!"}
          {this.renderTags()}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
