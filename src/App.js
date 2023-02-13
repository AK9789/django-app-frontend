import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Home from './components/home/Home'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Convert_Mobile from './components/Pages/Convert_Mobile'
import History_Mobile from './components/Pages/History_Mobile'
import Login from './components/Pages/Login'
import Message from './components/Pages/Message'
import Transfer_Mobile from './components/Pages/Transfer_Mobile'
import Alert from './components/layout/Alert'
import ShowHistory from './components/home/component/ShowHistory'
import showTransaction from './components/home/component/showTransaction'
import Register from './components/home/component/Register'

import PrivateRoute from './utils/PrivateRouting'

import AlertState from './context/alert/AlertState'
import Authstate from './context/auth/AuthState'
import BankState from './context/banks/BankState'
import SetauthToken from './utils/SetauthToken'
if(sessionStorage.token){
    SetauthToken(sessionStorage.token)
}
const App = () => {
    return (
        <Authstate>
            <BankState>
                <AlertState>
                    <BrowserRouter>
                        <div>
                            <Navbar />
                            <Alert />
                                <Switch>
                                    <PrivateRoute exact path="/" component={Home} />
                                    <Route  path="/login" component={Login} />
                                    <Route  path="/reg" component={Register} />
                                    <PrivateRoute  path="/his" component={ShowHistory} />
                                    <PrivateRoute  path="/trans" component={showTransaction} />
                                    <PrivateRoute  path="/history" component={History_Mobile} />
                                    <PrivateRoute  path="/message" component={Message} />
                                    <PrivateRoute  path="/transfer" component={Transfer_Mobile} />
                                    <PrivateRoute  path="/convert" component={Convert_Mobile} />
                                </Switch>
                            <Footer />
                        </div>
                    </BrowserRouter>
                </AlertState>
            </BankState>
        </Authstate>
    )
}

export default App