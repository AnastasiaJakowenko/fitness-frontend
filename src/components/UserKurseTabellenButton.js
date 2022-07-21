import React from "react";
// import { useState } from "react";

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
    return (
      <button className="table-button" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Frei' : 'Gebucht'
         // this.state.isToggleOn ? 'style={backgroundColor:"green", color:"white"}' : 'style={backgroundColor:"blue", color:"grey"}'

        }
      </button>
    );
  }
}

<div id="root">
</div>