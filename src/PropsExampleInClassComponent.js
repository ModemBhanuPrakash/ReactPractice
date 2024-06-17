import React, { Component } from 'react'

export default class PropsExampleInClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>This is printed using props {this.props.text}</h1>
      </div>
    )
  }
}
