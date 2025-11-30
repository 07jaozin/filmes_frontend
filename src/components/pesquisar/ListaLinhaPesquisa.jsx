import React from "react";

export function ListaLinhaPesquisa({filme}){
    return(
        <>
            <div className="movie-box">
                    <img src={`http://127.0.0.1:5000/static/img/${filme.foto}`} alt="Filme" className="movie-box-img" />
                    <div className="box-text">
                        <h2 className="movie-title">{filme.titulo}</h2>
                        <span className="movie-type">{filme.genero}</span>
                        <a href={`/filme/${filme.id}`} className="watch-btn">
                            <i className='bx bx-right-arrow'></i>
                        </a>
                    </div>
            </div>
        </>
    )
}