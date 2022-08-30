import React from "react";
import { useState } from "react";
import icon from "./images/chef-hat-icon.jpeg"
import Axios from 'axios';

const SignUpPage = () => {
    //capture users information to potentially store in database
    const [name, setName] = useState("");
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errStatus, setErrStatus] = useState("");


    const register = () => {
        //send data to update database
        Axios.post('http://localhost:3001/register', {
            firstName: name,
            user: username,
            pass: password,
        })
        .then(function (response) {
            if(response.data.errMessage) {
                setErrStatus(response.data.errMessage);
            }
            else {
                setErrStatus(response.data.Message);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    return (
        <div className="login-parent">
            <img className="logo" src={icon} alt="logo" />
            <p> Sign Up for Perfect Recipe </p>
            {/* Sign Up Form */}
            <form id="login">
                <label htmlFor="name">First Name:</label><br></br>
                <input type="text"  id="name" name="name" required onChange={e => {setName(e.target.value)}}/><br></br> 
                <label htmlFor="username">Username:</label><br></br>
                <input type="text" id="username" name="user" required onChange={e => {setUsername(e.target.value)}}/><br></br> 
                <label htmlFor="password">Password:</label><br></br>
                <input type="password" id="password" name="pass" required onChange={e => {setPassword(e.target.value)}}/><br></br><br></br>
                <input className="submit" type="submit" value="Sign Up" onClick={register}></input>
            </form>
            <p>{errStatus}</p>
        </div>
    );   
};

export default SignUpPage;