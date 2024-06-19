import React from 'react'

const Map = () => {
    const arr = ["bhanu","prakash","babloo","likhith"];
    const arr1 = [
        {
            id : 1,
            name : 'bhanu'
        },
        {
            id : 2,
            name : 'babloo'
        },
        {
            id : 3,
            name : "prakash"
        },
        {
            id : 4,
            name :'lohith'
        }
    ]
  return (
    <div>
      {
        arr.map(
            (value,index) => <li key={index}>{value}</li>
        )
      }
      <br></br>
      {
         arr1.map(
            (value) => <li key={value.id}>{value.id} : {value.name}</li>
        )
      }
    </div>
  )
}

export default Map
