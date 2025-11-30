import React from "react";
import { useFilmes } from "../hooks/UseFilme";
import { ShowLinha } from "./IndexLinha";

export function Show(){

    const{
        data: filmes = [],
        isLoading,
        error
    } = useFilmes();

    {isLoading && <p>Carregando...</p>}
    {error && <p>Erro ao carregar filmes.</p>}
    return(
        <>
            <section class="movies container" id="movies">
                <div class="heading">
                    <h2 class="heading-title">Show </h2>
                </div>
                <div class="movies-content" id="slides-show">
                    {filmes.filter(f => f.categoria === "show").map(filme => (
                        <ShowLinha filme={ filme } />
                    ))}

                </div>
       
        
       </section>

        </>
    )
}