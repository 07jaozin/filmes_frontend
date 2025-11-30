import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { listaFilmes } from "../../services/FilmesServices";
import { HomeLinha } from "./IndexLinha";
import { useFilmes } from "../hooks/UseFilme";
export function Home() {
    const queryClient = useQueryClient();

    const {
        data: filmes = [],
        isLoading,
        error
    } = useFilmes();

    return (
        <>
            <section className="home container" id="home">
                {isLoading && <p>Carregando...</p>}
                {error && <p>Erro ao carregar filmes.</p>}

                {filmes.filter(f => f.categoria === "home").map((filme) => (
                    
                    <HomeLinha key={filme.id} filme={filme}></HomeLinha>
                        
                ))}
            </section>
        </>
    );
}
