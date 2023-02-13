import React, {useState, useContext, useEffect} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import AuthContext from '../../context/auth/AuthContext'
import { useHistory } from 'react-router-dom'
import bank1 from '../layout/bank1.png'

import axios from 'axios'
const Login = props => {
    // const hello = ()=>{
    //     axios.post("http://127.0.0.1:8000/api/login/",data).then((response)=>{
    //         console.log(response)
    //     })
    // }
    const {setalert} = useContext(AlertContext)
    const {Login, token, error, clearError} = useContext(AuthContext)
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const {username, password} = user
    console.log(props)

    useEffect(() => {
        if(token){
            props.history.push('/');
        }
        if(error){
            setalert('invalid credentials', 'danger')
            clearError()
        }
        // eslint-disable-next-line
    }, [error, token])


    const HandleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault()
        if(username === '' || password === ''){
            setalert('please enter all feilds', 'danger')
        }else{
            Login(user)
        }
    }
    return (
        <div className="container">
            <div className="login__main">
                <div className="login">
                    <div className="login__box">
                        <form onSubmit={HandleSubmit}>
                            <input onChange={HandleChange} name='username' required type="text" className="input__feild feild" placeholder="username" />
                            <input onChange={HandleChange} name='password' required type="password" className="input__feild feild" placeholder="password" />
                            <button className="submit__feild feild" style={{ background: "#063970" }}>Login</button>

                        </form>
                        {/* <button className="submit__feild feild" style={{ background: "#063970" }} onClick={hello}>Login</button> */}
                    </div>
                </div>
            </div>

            <div id="card-wrapper">
                <div className="card">
                    <i class="fas fa-piggy-bank" id='icon-card'></i>
                        <div className="card-right">
                            <h3>Premium Banking</h3>
                            <p>A premier banking program designed with an array of offers.</p>
                        </div>
                </div>
                <div className="card">
                    <i class="fas fa-piggy-bank" id='icon-card'></i>
                        <div className="card-right">
                            <h3>Savings Account</h3>
                            <p>Pioneer Savings Account combines a series of top privileges.</p>
                        </div>
                </div>
                <div className="card">
                    <i class="fas fa-shield-alt" id='icon-card'></i>
                        <div className="card-right">
                            <h3>Robust Security</h3>
                            <p>Tailor made solution for your delight, 100% safe and secure.</p>
                        </div>
                </div>
            </div>

            <div id="content-container">
                <div className="content-box">
                    <div className="left">
                    <img src={bank1} style={{width:"50%"}} alt="bank" />
                    </div>
                    <div className="right">
                        <h1>About us</h1>
                        <p>The Bank has gone through the various phases of its growth trajectory over hundred years of its existence. Growth of STL Bank was phenomenal. attaining the status of a national level player in terms of geographical reach and clientele segments. Eighties was characterized by business diversification for the Bank.</p>
                    </div>
                
                </div>
                <div className="content-box">
                    <div className="left">
                        <img src="https://superdr.in/home/images/mission.png" alt="mission" />
                    </div>
                    <div className="right">
                        <h1>Mission</h1>
                        <p>To provide a secure, agile, dynamic and conducive banking environment to customers with commitment to values and unshaken confidence, deploying the best technology, standards, processes and procedures where customer convenience is of significant importance and to increase the stakeholders’ value.</p>
                    </div>
                </div>
                <div className="content-box">
                    <div className="left">
                        <img src="https://i.pinimg.com/originals/57/0c/9e/570c9e66391ccae6756b9ba775477f09.png" alt="vision" />
                    </div>
                    <div className="right">
                        <h1>Vision</h1>
                        <p>To emerge as a ‘Preferred Bank’ by pursuing global benchmarks in profitability, operational efficiency, asset quality, risk management and expanding the global reach. Provide advanced and creative banking products and services for all our clients, both locally and internationally</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login