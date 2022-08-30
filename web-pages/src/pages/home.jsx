import React from "react";
import background from "./images/back.jpg"
import { Link } from 'react-router-dom'

const MainPage = () => {
    return <div className="home-background-overlay">
            <img src={background} alt="background of home page" />
            <div className="front-text">
                <h1> Perfect <br></br> Recipes <br></br> Everytime</h1>
                <Link to='/about' onClick={() => this.changeColor("white")}>
                    <button className="home-button"> Learn More </button> <br></br>
                </Link>
                <Link to='/login'>
                    <button className="home-button"> Sign in </button> <br></br>
                </Link>
            </div>
           </div>
};

export default MainPage;
