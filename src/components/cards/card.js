import React from "react";

function Card({title,imgsrc,link}) {
    return (
        <div className="card">
            <div className="cardimg">
                <img src ={imgsrc}/>
            </div>
            <h6>{title}</h6>
            <a href = {link} target ="_blank">Visit Now</a>
        </div>
    )
}

export default Card