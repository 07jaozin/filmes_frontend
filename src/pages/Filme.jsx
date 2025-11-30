import React, {useState} from "react";
import { data, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useUpComentario } from "../hooks/useComentarios";
import { FilmeContainer } from "../components/FilmeContainer";
import { Canais_Filme } from "../components/filme/Canais_Filme";
import { Header } from "../components/Header";
import { Comentarios } from "../components/filme/Comentarios";
import { Comentar } from "../components/filme/Comentar";

export function Filme() {
    const [comentar, setComentar] = useState(false);
    const { id } = useParams();
    const [comentarioSelecionado, setComentarioSelecionado] = useState(null);

    const enviarComentario = useUpComentario();

    return (
        <>
            <Header setComentar={setComentar} />
            <FilmeContainer />
            <Comentarios setComentar={setComentar} setComentarioSelecionado={setComentarioSelecionado}/>

            {comentar && (
                <Comentar
                    setComentar={setComentar}
                    comentario={ comentarioSelecionado || {}}
                    onSubmit={(formData) =>
                        enviarComentario.mutate({
                            dados: formData,
                            id_filme: id
                        })
                    }
                />
            )}
        </>
    );
}
