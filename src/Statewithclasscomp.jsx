import React, { Component } from "react";
class StateClassComp extends Component {
  constructor() {
    super();
    this.state = {
      // state is nothing but data container just like we use variable
      // data: "Gaurav",
      data:0
    };
  }

  apple() {
    // alert("apple");
    this.setState({data:this.state.data+1})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Click on it!</button>
      </div>
    );
  }
}
export default StateClassComp;
