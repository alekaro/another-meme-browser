import React, { Component } from "react";

class MainContainer extends Component {
  state = {
    count: 0,
    imageUrl: "https:picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  } as React.CSSProperties;

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  //   /* If a function is called as a standalone
  //    * (so in the case below) the object "this" is undefined
  //    * You need to bind it to "this" as in the example above
  //    *
  //    */
  // }

  handleIncrement = (product: any) => {
    console.log(product);

    this.setState({ count: this.state.count + 1 });
    /* Arrow functions inherit "this" so we need to do
     * nothing in this case
     */
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl}></img>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
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

export default MainContainer;
