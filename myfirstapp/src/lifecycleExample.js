import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: "Hello World!",
    };
    console.log("M1: Constructor: Component is being created");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "M2/UP1: getDerivedStateFromProps: Component receives new props"
    );
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "UP2: shouldComponentUpdate: Decides if the component should update or not"
    );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "UP3: getSnapshotBeforeUpdate: Snapshot of the previous value has been taken"
    );
    return null;
  }

  componentDidMount() {
    console.log("M4: componentDidMount: Component added to the DOM");
  }

  componentDidUpdate() {
    console.log("UP5: componentDidUpdate: Component updated");
  }

  componentWillUnmount() {
    console.log("UM1: componentWillUnmount: Component will be removed");
  }

  handleChangeMessage = () => {
    this.setState({ message: "Message has been updated!" });
  };

  render() {
    console.log("M3/UP3: Render: Component is being rendered");
    return (
      <div>
        {/* <h2>React Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button> */}

        <h1>{this.state.message}</h1>
        <button onClick={this.handleChangeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleDemo;