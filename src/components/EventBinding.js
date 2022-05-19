import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit",
    };
    // this.handleClick = this.handleClick.bind(this)
  }

    handleClick() {
      this.setState({
        introduction: "Goodbye",
        buttonText: "Enter",
      });
      console.log(this.state.introduction);
    }

  /* Part of method 1 */
//   handleClick = () => {
//     this.setState({
//       introduction: "Goodbye",
//       buttonText: "Enter",
//     });
//     console.log(this.state.introduction);
//   };

  render() {
    return (
      <div>
          {/* For methods see the binding events cheat sheet: https://docs.google.com/document/d/1r7C6VtLiVtE54obMbhLU4z4fyzGPrCzxiLrcaqG4jT4/edit */}
        {/* Method 1 */}
        {/* <button onClick={this.handleClick}>Click me - class components binding</button> */}
        {/* Method 2 */}
        {/* <button onClick={() => this.handleClick()}>Click me - class components binding</button> */}
        {/* Method 3 */}
        {/* <button onClick={this.handleClick.bind(this)}>
          Click me - class components binding
        </button> */}
        {/* Method 4 - see constructor for commented code */}
        {/* <button onClick={this.handleClick}>Click me - class components binding</button> */}
      </div>
    );
  }
}

export default EventBinding;
