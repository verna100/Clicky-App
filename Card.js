import React from "react";
import { AST_PropAccess } from "terser";

function Card() {
    return (
        <div className="contact-card">
            <img src={props.imageURL}/>
            <h3>{props.name}/h3>
            <p>Phone: (212) 555-1234</p>
            <p>Email: mr.whiskaz@catnap.meow</p>
        </div>
    )
}

export default Card