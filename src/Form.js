import React,{useState} from 'react'

const Form = () => {
    const [data,setData] = useState({
        username : '',
        password : '',
    })
    const {username,password} = data
    const onChange = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e => {
        e.preventDefault()
        console.log(data)
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Enter Username' value={username} name='username' onChange={onChange}/><br/>
            <input type='password' placeholder='Enter Password' value={password} name='password' onChange={onChange}/><br/>
            <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default Form
