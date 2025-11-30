import React from "react";
import { Perfil_filme } from "./Perfil_filme";
import { perfilFilme } from "../hooks/UseFilme";
import { useParams } from 'react-router-dom';
import { useQueryClient } from "@tanstack/react-query";
import { Descricao_filme } from "./Descricao_filme";
import { Canais_Filme } from "./filme/Canais_Filme";


export function FilmeContainer(){
    const queryClient = useQueryClient();
    const {id} = useParams()
    

    const {
        data: filme = [],
        isLoading,
        error
    } = perfilFilme(id);

    console.log(filme)
    {isLoading && <p>Carregando...</p>}
    {error && <p>Erro ao carregar filmes.</p>}

    return(
        <>
            <div class="play-container container" id="filme-perfil">
                <Perfil_filme filme={filme} />
                
           </div>
           <br />
           <br />
           <br />
           <Descricao_filme filme={filme} />

             <Canais_Filme canais={filme?.canais}/>
           <br />
           <br />
           <br />

        </>
    )
}