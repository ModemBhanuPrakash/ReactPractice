import React,{useState} from 'react'

const SignupForm = () => {
    const [data,setData] = useState({
        username : '',
        email : '',
        mobile : '',
        address : '',
        password : '',
        confirmPassword : ''
    })
    const {username,email,mobile,address,password,confirmPassword} = data
    const formHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault()
        if(password==confirmPassword){
            console.log(data)
        }
        else{
            console.log("password and confirm password are not matching")
        }
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <input type='text' name='username' value={username} onChange={formHandler}/> <br/>
            <input type='email' name='email' value={email} onChange={formHandler}/>  <br/>
            <input type='text' name='mobile' value={mobile} onChange={formHandler}/>  <br/>
            <input type='text' name='address' value={address} onChange={formHandler}/> <br/>
            <input type='password' name='password' value={password} onChange={formHandler}/> <br/>
            <input type='password' name='confirmPassword' value={confirmPassword} onChange={formHandler}/> <br/>
            <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default SignupForm
