import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'
import StateExampleInClassComponent from './StateExampleInClassComponent'
import PropsExampleInClassComponent from './PropsExampleInClassComponent'
const App = () => {
  return (
    <div>
      <h1>My First React App</h1>
      <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <StateExampleInClassComponent></StateExampleInClassComponent>
      {/* <PropsExampleInClassComponent/>  */}
    </div>
  )
}

export default App
