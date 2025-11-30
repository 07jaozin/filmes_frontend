import React, { useState, useEffect } from "react";
import { useExcluirComentario } from "../../hooks/useComentarios";
import { useQueryClient } from "@tanstack/react-query";

export function Comentario_linha({ comentario, idSession, idFilme, setComentar, setComentarioSelecionado }) {

    const [opcoes, setOpcoes] = useState(false);

    const { mutate: excluir, isPending } = useExcluirComentario();

    const renderEstrelas = (avaliacao) => {
        const estrelas_cheias = Math.floor(avaliacao);
        const tem_meia = avaliacao - estrelas_cheias >= 0.25 && avaliacao - estrelas_cheias < 0.75;
        const estrelas_vazias = 5 - estrelas_cheias - (tem_meia ? 1 : 0);

        const estrelas = [];

        for (let i = 0; i < estrelas_cheias; i++)
            estrelas.push(<i key={"c" + i} className="bx bxs-star"></i>);

        if (tem_meia)
            estrelas.push(<i key="meia" className="bx bxs-star-half"></i>);

        for (let i = 0; i < estrelas_vazias; i++)
            estrelas.push(<i key={"v" + i} className="bx bx-star"></i>);

        console.log(idFilme)

        return estrelas;

        
    };

    const [usuario, setUsuario] = useState(null);
    
    
      useEffect(() => {
        try {
          const u = JSON.parse(localStorage.getItem("usuario"));
          setUsuario(u);
        } catch {
          setUsuario(null);
        }
      }, []);
    

    return (
        <>
            <div className="comentarios container">

                <div className="informacoes">
                    <img src={`http://127.0.0.1:5000/static/img/${comentario.foto}`} className="user-img" />
                    <br />
                    <br />
                    <div className="rating">
                        {renderEstrelas(comentario.avaliacao)}
                    </div>

                    {comentario.id_usuario === usuario?.id && usuario?.tipo === "adm" && (
                        <div className="options-container">

                            
                            <button className="options-btn" onClick={() => setOpcoes(!opcoes)}>
                                ⋮
                            </button>

                            {opcoes && (
                               
                                <div className="options-menu">

                                    <a style={{ cursor: "pointer" }} onClick={() => {
                                        setComentarioSelecionado(comentario);  
                                        setComentar(true); 
                                    }}>
                                        Editar
                                    </a>

                                    <button
                                        disabled={isPending}
                                        onClick={() => excluir({
                                            id: comentario.id,
                                            id_filme: idFilme
                                        })}
                                        className="option-item"
                                    >
                                        {isPending ? "Excluindo..." : "Excluir"}
                                    </button>
                                    <br />
                                    <br />
                                </div>
                                

                               
                            )}
                        </div>
                    )}


                </div>

                <p>{comentario.comentario}</p>
            </div>
            <br />
            <br />
        

        </>
    );
}
