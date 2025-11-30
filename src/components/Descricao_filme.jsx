import React from "react";

export function Descricao_filme({filme}){

    return(
        <>
            <center>
                <div className="sinopse container">
                    <p>{filme.descricao}</p>
                </div>

                <div className="next-page">
                    <a
                        href={`http://127.0.0.1:5000/static/video/${filme.video}`}
                        download
                        className="next-btn"
                      >
                        Download do trailer
                    </a>
                 </div>
            </center>
        </>
    )

}