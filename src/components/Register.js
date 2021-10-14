import React, { useState } from 'react'
import '../App.css';

function Register(props) {

    const [user, setUser] = useState({})
    const [message, setMessage] = useState('')


    const handleRegisterChange = (e) => {
        setUser({

            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleRegisterButton = () => {
        
        fetch('https://quizwiz.glitch.me/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(response => response.json())

            .then(result => {
                if (result.success) {
                    props.history.push('/login')
                }


                else {
                    setMessage(result.message)

                }
            })

        
    }
    
    return (
        <div id="log_RegBox">
            <h1 className=" log_RegTitle">Become A Member</h1>
            {message && <p>{message}</p>}
            <input className="log_RegTextbox" type="text" name="userName" onChange={handleRegisterChange} placeholder=" Enter Desired User name"  /><br></br>
            <input className="log_RegTextbox" type="password" name="password" onChange={handleRegisterChange} placeholder="Enter Desired Password" /><br></br>
            
            <button className="log_RegButton" onClick={handleRegisterButton}>Submit</button>

        </div>
    )
}

export default Register