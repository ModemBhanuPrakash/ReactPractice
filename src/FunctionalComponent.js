import React,{useState} from 'react'

const FunctionalComponent = () => {
  //We have used one of the react hooks called useState for storing the values and to modify,pass them in to other components.  
  const [text,setText] = useState("This is a example of ");
  return (
    <div>
      <h1> {text} React Functional Component</h1>
    </div>
  )
}

export default FunctionalComponent
