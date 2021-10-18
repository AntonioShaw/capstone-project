
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';
import googleLogo from './google2.png';
import instagramLogo from './instagram.png';
import facebookLogo from './facebook.png';
import githubLogo from './github.png';
function Login(props) {


    const [credentials, setCredentials] = useState({})
    const [message, setMessage] = useState('')


    const handleLoginChange = (e) => {
        setCredentials({

            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleLoginButton = () => {
        // fetch('https://quizwiz.glitch.me/api/login', {
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)

        }).then(response => response.json())
            .then(result => {
                if (result.success == true) {
                    console.log(result)
                    //Get Token And Put It In Local Storage
                    const token = result.token
                    localStorage.setItem('jsonwebtoken', token)
                    localStorage.setItem('user_Id', result.user_id)
                    localStorage.setItem('name', result.name)
                    props.history.push('/')

                }
                else {
                    setMessage(result.message)
                }
            })
    }



    return (
        <div id="logBody">
            <div id="login-Container">
                <h1>Login</h1>
                <input className="log-RegText" type="text" name="userName" onChange={handleLoginChange} placeholder="User name" /><br></br>
                <input className="log-RegText" type="password" name="password" onChange={handleLoginChange} placeholder="Password" /><br></br>
                {message && <p className="message" >{message}</p>}
                <a className="log-Btn" onClick={handleLoginButton}>Login</a>
            </div>
            
            <div className="icon-container" style={{ textAlign: "center" }}>

            Not A Member Yet?  <NavLink to="/register" className='regLink'>Register Here</NavLink>

                <div id="google-btn">
                <a href="http://localhost:8080/auth/google">
                    <img id="icon" src={googleLogo} alt="Login With Google"  style={{ backgroundColor: "#CB4024" }}></img>
                </a>
                <div id="google">Login With Google</div>
                </div>

                <div id="instagram-btn">
                <a href="http://localhost:8080/auth/instagram">
                    <img id="icon" src={instagramLogo} alt="Login With Instagram"  style={{ backgroundColor: "#d9317a" }}></img>
                </a>
                <div id="instagram">Login With Instagram</div>
                </div>

                <div id="facebook-btn">
                <a href="http://localhost:8080/auth/facebook">
                    <img id="icon" src={facebookLogo} alt="Login With Facebook"  style={{ backgroundColor: "#3B5899" }}></img>
                </a>
                <div id="facebook">Login With Facebook</div>
                </div>

                <div id="github-btn">
                <a href="http://localhost:8080/auth/github">
                    <img id="icon" src={githubLogo} alt="Login With Github"  style={{ backgroundColor: "#333333" }}></img>
                </a>
                <div id="github">Login With Github</div>
                </div>
            </div>
        </div>
    )
}



export default Login