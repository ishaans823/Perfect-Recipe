import React from "react";
import icon from "./images/chef-hat-icon.jpeg"

const AboutPage = () => {
    return (<div className="about-layout">
                <div className="header-text">
                    <h1 className="header-about"> Find the perfect recipe <br></br> ON YOUR TERMS</h1>
                    <p> Exactly what your looking for with <br></br>custom filters and ingredient search.</p>
                </div>
                <div className="food">
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                        <img className="foodImg" src={icon} alt="foodImg" />
                </div>
                <h2 className="testomonial-text"> Testomonials </h2>
                <div className="testomonials">
                    <div className="person">
                        <p>
                            As a regular gym goer, perfect recipe helps me stay on track with a variety
                            of delicous yet health concious recipes. The calorie filter helps a ton.
                        </p>
                    </div>
                    <div className="person">
                        <p>
                            As a mom, perfect recipe is great for my toddlers, who are picky eaters.
                            I can filter out all the ingredients I don't want with the click of a button.
                        </p>
                    </div>
                    <div className="person">
                        <p>
                            As a college student, perfect recipe is excellent at finding me recipes that
                            are easy to make, healthy, and delicious. It is so convenient in a time crunch!
                        </p>
                    </div>
                    <div className="person">
                        <p>
                            As a mom, perfect recipe is great for my toddlers, who are picky eaters.
                            I can filter out all the ingredients I don't want with the click of a button.
                        </p>
                    </div>
                </div>
            </div>
        
    );   
};

export default AboutPage;
