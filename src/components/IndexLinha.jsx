import React from "react";

export function HomeLinha({filme}) {
    const dataBr = new Date(filme.lancamento).toLocaleDateString("pt-BR", {
         month: 'long',
         year: 'numeric'
    });
   
    return(
    <>
        <img src={`http://127.0.0.1:5000/static/img/${filme.foto}`} alt="" className="home-img" />
        <div className="home-text">
            <h1 className="home-title">{ filme.titulo }</h1>
            <p>{ dataBr }</p>
            <a onClick={() => window.location.href =`/filme/${filme.id}`}  className="watch-btn">
                <i className='bx bx-right-arrow'></i>
                <span>Ver mais</span>
            </a>
        </div>
    </>)
}

export function PopularLinha({ filme }) {
    return (
        <div className="movie-box">
            <img 
                src={`http://127.0.0.1:5000/static/img/${filme.foto}`} 
                alt={filme.titulo} 
                className="movie-box-img" 
            />

            <div className="box-text">
                <h2 className="movie-title">{filme.titulo}</h2>
                <span className="movie-type">{filme.genero}</span>

                <a onClick={() => window.location.href =`/filme/${filme.id}`} className="watch-btn play-btn">
                    <i className='bx bx-right-arrow'></i>
                </a>
            </div>
        </div>
    );
}

export function ShowLinha({ filme }) {
    return (
        <div className="movie-box">
                <img 
                 src={`http://127.0.0.1:5000/static/img/${filme.foto}`} 
                 alt="" 
                 className="movie-box-img" />
                <div className="box-text">
                    <h2 className="movie-title">{ filme.titulo }</h2>
                    <span className="movie-type">{ filme.genero }</span>
                    <a onClick={() => window.location.href =`/filme/${filme.id}`} className="watch-btn play-btn">
                        <i className='bx bx-right-arrow'></i>
                    </a>
                    
                </div>
            </div>
    );
}
