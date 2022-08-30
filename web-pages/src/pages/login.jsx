import React from "react";
import icon from "./images/chef-hat-icon.jpeg";
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useState } from "react";


const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errStatus, setErrStatus] = useState("");
    
    const login = () => {
        //send data to update database
        Axios.post('http://localhost:3001/login', {
            user: username,
            pass: password,
        })
        .then(function (response) {
            if(response.data.errMessage) {
                setErrStatus(response.data.errMessage);
            }
            else {
                setErrStatus("Logged in");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    return (
        <div className="login-parent">
            <img className="logo" src={icon} alt="logo" />
            <p> Login to Perfect Recipe </p>
            <div id="login">
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="user" required onChange={e => {setUsername(e.target.value)}}></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="password" id="password" name="pass" required onChange={e => {setPassword(e.target.value)}}></input><br></br><br></br>
                <input className="submit" type="Submit" value="Submit" onClick={login}></input>
            </div>
            <Link to='/signup'>
                 Don't have an account? Sign up here!   
            </Link>
            <p>{errStatus}</p>
        </div>
    );   
};

export default LoginPage;
