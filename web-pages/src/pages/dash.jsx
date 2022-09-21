import React from "react";
import { useState } from "react";
import menu from "./images/arrow.png"
const hidden = require("./private.json");

const DashPage = () => {
    const [inputVal, setInputVal] = useState(""); //store what users put in the search bar
    const [recipesOut, setRecipesOut] = useState([]); //store recipe displays
    const [dropDownOpen, setDropDownOpen] = useState(false); //store the state of dropdown menu (open or closed)
    //HashMap to track user preferences (0 or 1 to track checked and unchecked)
    let userPreferences = new Map([
        ["Gluten-Free", -1], ["Dairy-Free", -1], ["Peanut-Free", -1], ["Egg-Free", -1], ["Tree-Nut-Free", -1],
        ["Keto-Friendly", -1], ["Vegan", -1], ["Vegetarian", -1], ["Pescatarian", -1], ["Kosher", -1], ["Calories", -1],
        ["Protein", -1], ["Fat", -1], ["Carb", -1]
    ])

    function DropDownComponent(props) {
        const descrOfField = "descr-" + props.text;
        return (
            <div className="dropdown-component">
                <input type="checkbox" id={props.text} onClick={() => { addPreferences(props.text) }} ></input>
                <label id={descrOfField}> {props.text}</label>
            </div>
        );
    }

    function DropDownInput(props) {
        return (
            <div className="dropdown-component">
                <label> {props.text}</label>
                <input type="number"></input>
                <label> {props.text2}</label>
                <input type="number"></input>
            </div>
        );
    }

    function addPreferences(field) {
        //adjust array when user checks boxes or adds other preferences.
        if (document.getElementById(field).checked) {
            userPreferences.set(document.getElementById("descr-" + field).textContent.trim(), 1);
        }
        else {
            userPreferences.set(document.getElementById("descr-" + field).textContent.trim(), 0);
        }
        console.log(userPreferences)
    }

    async function callApi() {
        const appKey = hidden.appKey;
        const appId = hidden.appId;
        let url = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + inputVal + '&app_id=' + appId + '&app_key=' + appKey;
        //loop through map to add preferences
        userPreferences.forEach((value, category) => {
            if (value == 1) {
                const apiText = category.toLowerCase();
                url += '&health=' + apiText;
            }
        });
        await fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(url);
                setRecipesOut(response.hits); //hits is the json array with recipes and information
            })
            .catch(err => console.error(err));
    }


    return (
        <div className="dash-content">
            <h1 className="intro"> Welcome back!</h1>
            <div className="search-bar">
                <div className="search-components">
                    <input type="text" placeholder="Start a New Search" onChange={e => { setInputVal(e.target.value) }}></input>
                    <img src={menu} onClick={() => { setDropDownOpen(!dropDownOpen) }} className="dropdown-icon"></img>
                    <button type="button" onClick={callApi}> Search </button>
                </div>
                <div className={dropDownOpen ? 'open' : 'close'}>
                    <h3> Allergies </h3>
                    <ul>
                        <DropDownComponent text={"Gluten-Free"} />
                        <DropDownComponent text={"Dairy-Free"} />
                        <DropDownComponent text={"Peanut-Free"} />
                        <DropDownComponent text={"Egg-Free"} />
                        <DropDownComponent text={"Tree-Nut-Free"} />
                    </ul>
                    <h3> Diet Preferences </h3>
                    <ul>
                        <DropDownComponent text={"Keto-Friendly"} />
                        <DropDownComponent text={"Vegan"} />
                        <DropDownComponent text={"Vegetarian"} />
                        <DropDownComponent text={"Pescatarian"} />
                    </ul>
                    <h3> Calories and Macros </h3>
                    <ul>
                        <DropDownInput text={"Min Calories: "} text2={"Max Calories: "} />
                        <DropDownInput text={"Min Protein: "} text2={"Max Protein: "} />
                        <DropDownInput text={"Min Carbs: "} text2={"Max Carbs: "} />
                        <DropDownInput text={"Min Fat: "} text2={"Max Fat: "} />
                    </ul>
                </div>
            </div>
            <div className="search-results">
                {/* Loop through the recipes */}
                {recipesOut.map(recipe => {
                    return (<div className="card">
                        <img src={recipe.recipe.images.SMALL.url}></img>
                        <h2 key={recipe.label}>{recipe.recipe.label} </h2>
                        {/* <p> Ingredients: {recipe.recipe.ingredientLines}</p> */}
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default DashPage;