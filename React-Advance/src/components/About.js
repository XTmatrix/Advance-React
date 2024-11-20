import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
      position: " ",
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      position: this.props.position,
    });
  }

  render() {
    return (
      <>
        <div>Hello {this.state.name}</div>
        <div>Your position is: {this.state.position}</div>
      </>
    );
  }
}

export default About;
