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
    const fruits = ['apple','banana','pineapple','leach','mango']
    const filteredFruits = fruits.filter(fruit => fruit.includes('e'))
    const numbers = [1,20,-6,65,85,-96,12,-74,-39,301]
    const posNumbers = numbers.filter(num => num>=0)
  return (
    <div>
      {/* {
        arr.map(
            (value,index) => <li key={index}>{value}</li>
        )
      }
      <br></br>
      {
         arr1.map(
            (value) => <li key={value.id}>{value.id} : {value.name}</li>
        )
      } */}
      {
        filteredFruits.map(
            (fruit) => <li key={fruit}>{fruit}</li>
        )
      }
      {
        posNumbers.map(
            (num,index) => <li key={index}>{num}</li>
        )
      }
    </div>
  )
}

export default Map
