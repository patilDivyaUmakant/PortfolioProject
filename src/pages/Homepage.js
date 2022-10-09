import React from "react"
import {link} from "react-router-dom";

function homepage() {
    return (
        <div className = "homepage">
            <div className = "intro">
                <h2>Hello I Am</h2>
                <h1>Harley Jones</h1>
                <h5>Frontend Developer</h5>
                <Link to = "/portfolio"><button>See my Works</button></Link> 

            </div>
            <div className = "homeImg">
                <img src = "https://ingeniouswebster.netlify.app/assets/imG/service.png" alt = "img" />
            </div>
        </div>
    )
}

export default homepage