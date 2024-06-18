import React from 'react'
// import './App.css';
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import StateExampleInClassComponent from './StateExampleInClassComponent'
import PropsExampleInClassComponent from './PropsExampleInClassComponent'
const App = () => {
  const styling={
    color : "black",
    backgroundColor : "lightgrey",
    padding : "50px",
    textAlign : "center"
  }
  return (
    <div className='container'>
      <h1 style={styling}>My First React App</h1>
      {/*<ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <StateExampleInClassComponent></StateExampleInClassComponent>
       <PropsExampleInClassComponent/>  */}
    </div>
  )
}

export default App
