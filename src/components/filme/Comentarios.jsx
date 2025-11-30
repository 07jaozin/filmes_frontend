import React, { useState, useEffect } from "react";
import { useIDRota } from "../../hooks/useIDRota";
import { useComentarios_filme } from "../../hooks/useComentarios";
import { Comentario_linha } from "./Comentario_linha";
import { Fetch_usuario_session } from "../../../services/UsuarioServices";

export function Comentarios({setComentar, setComentarioSelecionado}){

    const id = useIDRota();
    const [idSession, setIdSession] = useState(null);

    
    useEffect(() => {
        async function buscarSession() {
            const id = await Fetch_usuario_session();
            setIdSession(id);
        }
        buscarSession();
    }, []);

    const [mostrarTodos, setMostrarTodos] = useState(false);

    const {
        data: comentarios = [],
        isLoading,
        error
    } = useComentarios_filme(id);

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar comentários.</p>;

    if (comentarios === "nenhum") {
        return (
            <div className="heading container">
                <h2 className="heading-title">Avaliações</h2>
                <p>Sem avaliações ainda.</p>
            </div>
        );
    }

    // Lógica de exibir somente 5 ou todos
    const cincoPrimeiros = comentarios.slice(0, 5);
    const comentariosExibidos = mostrarTodos ? comentarios : cincoPrimeiros;

    return (
        <>
            <div className="heading container">
                <h2 className="heading-title">Avaliações</h2>
            </div>

            {/* Renderizar comentários */}
            {comentariosExibidos.map((comentario) => (
                <Comentario_linha
                    comentario={comentario}
                    idSession={idSession}
                    idFilme={id}
                    setComentar={setComentar}
                    setComentarioSelecionado={setComentarioSelecionado}
                    key={comentario.id}
                />
            ))}

            {/* Botão de Mostrar mais / menos */}
            {comentarios.length > 5 && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button 
                        className="next-btn"
                        onClick={() => setMostrarTodos(!mostrarTodos)}
                    >
                        {mostrarTodos ? "Mostrar menos" : "Mostrar todos"}
                    </button>
                </div>
            )}
        </>
    );
}
