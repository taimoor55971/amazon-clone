import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom'
import firebase, { auth } from './firebase';



function Login() {
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const history=useHistory()
    const Signin=e=>{
        e.preventDefault();
        //firebase authentication
        auth.signInWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            history.push("/")
        }).catch(error=>{alert(error.message)});
    }
    const Register=e=>{
        e.preventDefault();
        //firebase authentication
       auth
            .createUserWithEmailAndPassword(Email, Password)
             .then((auth)=>{
                 console.log(auth)
                 if(auth){
                     history.push("/")
                 }
             })
            .catch(error=>{alert(error.message)})
    }
    

    return (
        <div className="login">
        <Link to="/">
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/f/fd/Amazon.svg/revision/latest/scale-to-width-down/300?cb=20200604050112"
             alt="brand-logo" className="logo"/>
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={Email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={Password} onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit" className="Login-SigninButton" onClick={Signin}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
                <button className="Login-RegisterButton" onClick={Register}>
                    Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
