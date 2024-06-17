import React, { Component } from 'react'
import PropsExampleInClassComponent from './PropsExampleInClassComponent'

export default class StateExampleInClassComponent extends Component {
    state = {
        text : "In class component"
    }
  render() {
    return (
      <div>
        <h1>This is printed using State {this.state.text}</h1>
        <PropsExampleInClassComponent text={this.state.text}></PropsExampleInClassComponent>
      </div>
    )
  }
}
