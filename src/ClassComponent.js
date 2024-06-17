import React, { Component } from 'react'

export default class ClassComponent extends Component {
    //used to store values as object of the class,this object is used to assign values,modify the values,use the values etc..
    state = {
        text : "This is a example of ",
    }
  render() {
    return (
      <div>
        <h1>{this.state.text}React Class Component</h1>
      </div>
    )
  }
}
