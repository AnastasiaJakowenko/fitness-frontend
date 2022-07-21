import React from "react";

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const buttonStyle =this.state.isToggleOn ? {backgroundColor:"white", color:"black"} : {backgroundColor:"green", color:"white"}
//  getreq von backend ? {backgroundColor:"red", color:"black"} :
    return (
      <>
      <button className="table-button" onClick={this.handleClick} style={buttonStyle}>
        {this.state.isToggleOn ? 'Frei' : 'Gebucht'}
      </button>
      </>
    );
  }
}

<div id="root">
</div>