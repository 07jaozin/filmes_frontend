import React from "react";
import { usePesquisaFilme } from "../../hooks/UseFilme";
import { ListaLinhaPesquisa } from "./ListaLinhaPesquisa";

export function ListaPesquisa({dados}){
    const{
        data: filmes_pesquisa = [],
        isLoading,
        error
    } = usePesquisaFilme(dados)
   
    return(
        <section className="movies container" id="movies">
            {isLoading && <p>Carregando...</p>}
            {error && <p>Erro ao carregar filmes.</p>}
            <div className="movies-content">
                {filmes_pesquisa.map( filme => (
                    <ListaLinhaPesquisa filme={filme} key={filme.id}></ListaLinhaPesquisa>
                ))}
            </div>
        </section>
    )
}