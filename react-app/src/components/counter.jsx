import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li 
          key={tag}
          style={{ fontSize: 30 }}
          >{tag}</li>
        ))}{" "}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span style={{ fontSize: 50 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 40 }}
          className="btn btn-success btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 40 }}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 40 }}
          className="btn btn-danger btn-sm m-2"
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
