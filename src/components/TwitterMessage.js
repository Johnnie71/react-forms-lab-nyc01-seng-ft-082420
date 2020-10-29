import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();

    this.state = {
      input: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  remaining() {
     return (this.props.maxChars - this.state.input.length)
  } 
    

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.changeHandler(event)} value={this.state.input} />
        <strong>{this.remaining()}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
