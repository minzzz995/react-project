import React, { Component } from 'react';

class Box extends Component {
  render() {
    let resultClass = "";

    if (this.props.result === "win") {
      resultClass = "win";
    } else if (this.props.result === "lose") {
      resultClass = "lose";
    } else if (this.props.result === "tie") {
      resultClass = "tie";
    }

    return (
      <div className={`box ${resultClass}`}>
        <h1>{this.props.title}</h1>
        <img className="item-img" src={this.props.item && this.props.item.img} alt={this.props.item && this.props.item.name} />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}

export default Box;
