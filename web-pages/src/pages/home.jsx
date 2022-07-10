import React from "react";
import background from "./images/background.jpeg"


const MainPage = () => {
    return (
        <div style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:600,width:1000
    }}>    </div>
    );
};

export default MainPage;
