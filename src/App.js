import React,{ useState } from 'react'

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
  const [count,setCount] = useState(0);
  return (
    <div className='container'>
      <h1 style={styling}>My First React App</h1>
      <h2 style={{color:"black",textAlign:"center "}}>The No of times button clicked {count}</h2>
      <center>
      <button style={{color:"black",backgroundColor:"lightgrey",padding:"10px",margin:"50px"}} onClick={() => setCount(count+1)}>Click here</button>
      </center>
      {/*<ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      <StateExampleInClassComponent></StateExampleInClassComponent>
       <PropsExampleInClassComponent/>  */}
    </div>
  )
}

export default App
