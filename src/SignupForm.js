import React,{useState} from 'react'
import axios from 'axios'
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
        // if(username.length<5){
        //     alert("username must have atleast 5 characters")
        // }
        // else if(mobile.length!==10){
        //     alert("Enter valid mobile number")
        // }
        // else if(password !== confirmPassword){
        //     alert("Passwords are not matching")
        // }
        // else{
        //     console.log(data)
        // }
        axios.post('https://reactpractice-f9296-default-rtdb.firebaseio.com/register.json',data).then(()=> alert("Submitted Successfully"))
    }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <input type='text' name='username' value={username} onChange={formHandler} placeholder='Enter Username'/> <br/>
            <input type='email' name='email' value={email} onChange={formHandler} placeholder='Enter EmailID'/>  <br/>
            <input type='text' name='mobile' value={mobile} onChange={formHandler} placeholder='Enter Mobile No'/>  <br/>
            <input type='text' name='address' value={address} onChange={formHandler} placeholder='Enter Address'/> <br/>
            <input type='password' name='password' value={password} onChange={formHandler} placeholder='Enter Password'/> <br/>
            <input type='password' name='confirmPassword' value={confirmPassword} onChange={formHandler} placeholder='Confirm Password'/> <br/>
            <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default SignupForm
