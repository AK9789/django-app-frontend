import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
const Register = () => {

    const history = useHistory()

    const[first_name, setFirst_name] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[username, setUsername] = useState("")
    const[branch, setBranch] = useState("")
    const[ifsc, setIfsc] = useState("")
    const [temp, setTemp] = useState({})

    const register=props=>{
        const data = {
            "first_name":first_name,
            "email":email,
            "password":password,
            "username":username,
            "branch":branch,
            "ifsc":ifsc
        }
        axios.post("http://127.0.0.1:8000/api/register/",data).then((response)=>{
            console.log(response)
            alert('submitted')
            history.push("/login");
            history.go();
        })
    }


  return (
    <div>
        <div className="container">
            <div className="login__main">
                <div className="login">
                    <div className="login__box">
                        <form >
                            <input name='firstname' required type="text" className="input__feild feild" placeholder="firstname" onChange={(event)=>{setFirst_name(event.target.value)}}/>
                            <input name='email' required type="email" className="input__feild feild" placeholder="email" onChange={(event)=>{setEmail(event.target.value)}}/>
                            <input name='password' required type="password" className="input__feild feild" placeholder="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                            <input name='username' required type="text" className="input__feild feild" placeholder="username" onChange={(event)=>{setUsername(event.target.value)}}/>
                            <input name='branch' required type="text" className="input__feild feild" placeholder="branch" onChange={(event)=>{setBranch(event.target.value)}}/>
                            <input name='ifsc' required type="text" className="input__feild feild" placeholder="ifsc" onChange={(event)=>{setIfsc(event.target.value)}}/>
                            <button className="submit__feild feild" onClick={register} style={{ background: "#063970" }}>Register</button>
                        
                        </form>
                            {/* <button className="submit__feild feild" style={{ background: "#063970" }} onClick={hello}>Login</button> */}
                    </div>
                </div>
        
            </div>
            
        </div>
        
    </div>
  )
}

export default Register