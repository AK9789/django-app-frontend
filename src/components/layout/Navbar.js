import React, {useContext} from 'react'
import { useHistory } from 'react-router'

// import  { Redirect } from 'react-router-dom'
// import {browserHistory} from 'react'
import AuthContext from '../../context/auth/AuthContext'
import Logo from './stl.jpg'
const Navbar = props=> {
    const history = useHistory();
    const {logout,token } = useContext(AuthContext)

    // console.log(window.innerWidth)
    
    if(window.innerWidth > 450){
        // <Redirect to='/'  />
        // props.history.push('/')
        // browserHistory.push("/");
    }
    return (
        <header>
            <div className="logo">
                <a href="/">
                    <img src={Logo} style={{'width':'100px'}} alt="STL bank" />
                </a>
            </div>
            {
                !token ? (
                    <a href="/reg"><button style={{'background':'#063970'}}>Register</button></a>
                    
                ) : null
                
            }
            {
                !token ? (
                    <a href="/login"><button style={{'background':'#063970'}}>Go To Login</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/"><button style={{'background':'#063970'}}>Home</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/his"><button style={{'background':'#063970'}}>Transaction History</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <a href="/trans"><button style={{'background':'#063970'}}>Transaction</button></a>
                    
                ) : null
                
            }
            {
                token ? (
                    <button onClick={logout} style={{'background':'#063970'}}>logout</button>
                    
                ) : null
                
            }
            
            
        </header>
    )
}

export default Navbar
