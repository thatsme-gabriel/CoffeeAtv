import React from "react";
import './headerStyle.css'

export default function Header({title}:any) {

    
    return(
        <div className="header">
            <h1>{title}</h1>
        </div>
    )
}

