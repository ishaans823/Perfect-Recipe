import React from "react";
import "./login.css"

const LoginPage = () => {
    return (
        <div className="LoginForm">
            <form action="/" >
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" name="user" required></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="password" id="password" name="pass" required></input><br></br><br></br>
                <input type="Submit" value="Submit"></input>
            </form>
        </div>
    );   
};

export default LoginPage;