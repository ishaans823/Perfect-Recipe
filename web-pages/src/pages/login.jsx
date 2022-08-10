import React from "react";
import icon from "./images/chef-hat-icon.jpeg"

const LoginPage = () => {
    return (
        <div className="login-parent">
            <img className="logo" src={icon} alt="logo" />
            <p> Login to Perfect Recipe </p>
            <form id="login" action="/dashboard" >
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="user" required></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="password" id="password" name="pass" required></input><br></br><br></br>
                <input className="submit" type="Submit" value="Submit"></input>
            </form>
        </div>
    );   
};

export default LoginPage;
