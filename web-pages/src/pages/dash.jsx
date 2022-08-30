import React from "react";
import { useState } from "react";
const hidden = require("./private.json");

const DashPage = () => {
    const [inputVal, setInputVal] = useState(""); //store what users put in the search bar
    const [recipesOut, setRecipesOut] = useState([]); //store recipe displays
    
    async function call() {
        const appKey = hidden.appKey;
        const appId = hidden.appKey;
        await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=' + inputVal + '&app_id=' + appId + '&app_key=' + appKey)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setRecipesOut(response.hits); //hits is the json array with recipes and information
        })
        .catch(err => console.error(err));
    }
    return ( <div className="dash-content">
                <h1> Welcome back _____!</h1>
                <input type="text" placeholder="Start a New Search" onChange={e => {setInputVal(e.target.value)}}></input> <br></br><br></br>
                <button className="submit" onClick={call}> Search </button>
                <div className="search-results">
                    {recipesOut.map(recipe => {
                        return(  <div className="card">
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