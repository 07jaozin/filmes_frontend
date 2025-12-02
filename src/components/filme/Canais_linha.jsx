import React from "react";

export function Canais_row({canal}){
    

    return (
        <div className="canais-box">
            <img src={`http://127.0.0.1:5000/static/img/${canal?.foto}`} onClick={() => window.open(canal?.link, "_blank")} alt={canal?.nome} className="movie-box-img" />
        </div>
        
    )
}