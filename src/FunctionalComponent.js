import React,{useState} from 'react'

const FunctionalComponent = () => {
  const [text,setText] = useState("This is a example of ");
  return (
    <div>
      <h1> {text} React Functional Component</h1>
    </div>
  )
}

export default FunctionalComponent
