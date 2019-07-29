import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement= () => {
    this.setState({ value: this.state.value + 1 })
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
    this.setState({ value: this.state.value+1 });
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
        <button 
         onClick={() => this.props.onDelete(this.props.counter.id)}
         style={{ fontSize: 40 }}
         className="btn btn-secondary btn-sm"
        >
          Delete
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
