import React, {useContext, useEffect} from 'react'
import AuthContext from '../../../context/auth/AuthContext'
const Welcome = () => {
    const {user, loaduser} = useContext(AuthContext)
    useEffect(() => {
        loaduser()
        // eslint-disable-next-line
    }, [])
    return (
        <div className="infome">
            <h2 style={{'textAlign':'center'}}>Welcome! to STL Bank</h2>
            <div className='homeContent'>
            <h3>Hello, {user && user.username ? user.username : null}</h3>
            <h4>Bank Balance: <span><i class="uil uil-rupee-sign"></i>{user && user.balance ? user.balance : null}</span> <span className="crr"></span> </h4>
            <p className="accountnumber">
                <span className="accountnumber_title">Account Number:</span>                
                <span className="accountnumber_number"> {user && user.account_number ? user.account_number : null}</span>
            </p>
            <p className="email">
                <span className="accountnumber_title">Email:</span>                
                <span className="accountnumber_number"> {user && user.email ? user.email : null}</span>
            </p>
            <p className="branch">
                <span className="accountnumber_title">Branch:</span>                
                <span className="accountnumber_number"> {user && user.branch ? user.branch : null}</span>
            </p>
            <p className="ifsc">
                <span className="accountnumber_title">IFSC Code:</span>                
                <span className="accountnumber_number"> {user && user.ifsc ? user.ifsc : null}</span>
            </p>
            </div>
            
        </div>
    )
}

export default Welcome
