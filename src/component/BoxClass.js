import React, { Component } from 'react'

// props정의할 때도 this. 붙여주기!
export default class BoxClass extends Component {
  render() {
    return (
      <div>
        Box{this.props.num}
      </div>
    )
  }
}
